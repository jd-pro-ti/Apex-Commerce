import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Rutas protegidas y sus roles requeridos
const routePermissions = {
  // Rutas de admin
  '/dashboard/admin': ['admin'],
  '/api/admin': ['admin'],
  '/admin': ['admin'],
  
  // Rutas de vendedor
  '/dashboard/vendedor': ['admin', 'vendedor'],
  '/api/vendedor': ['admin', 'vendedor'],
  '/vendedor': ['admin', 'vendedor'],
  
  // Rutas de cliente
  '/dashboard/cliente': ['admin', 'vendedor', 'cliente'],
  '/perfil': ['admin', 'vendedor', 'cliente'],
  '/carrito': ['admin', 'vendedor', 'cliente'],
  '/pedidos': ['admin', 'vendedor', 'cliente'],
};

const publicRoutes = [
  '/',
  '/auth/login',
  '/auth/registro',
  '/auth/callback',
  '/productos',
  '/api/public',
];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Verificar si es ruta pública
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Verificar si es ruta de archivos estáticos
  if (pathname.includes('.')) {
    return NextResponse.next();
  }

  try {
    // Crear cliente de Supabase con cookies
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Obtener sesión
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError || !session) {
      return redirectToLogin(request, pathname);
    }

    // Obtener roles del usuario desde la base de datos
    const { data: userData, error: userError } = await supabase
      .from('Usuario')
      .select(`
        UsuarioRol (
          Rol (
            nombreRol
          )
        )
      `)
      .eq('email', session.user.email)
      .single();

    if (userError) {
      console.error('Error fetching user roles:', userError);
      return redirectToLogin(request, pathname);
    }

    // Extraer roles del usuario
    const userRoles = userData?.UsuarioRol?.map(ur => ur.Rol.nombreRol) || ['cliente'];
    
    // Verificar permisos para la ruta actual
    const allowedRoles = routePermissions[pathname] || routePermissions[Object.keys(routePermissions).find(key => pathname.startsWith(key))] || [];
    
    // Si no hay restricciones de rol para la ruta, permitir acceso
    if (allowedRoles.length === 0) {
      return NextResponse.next();
    }

    // Verificar si el usuario tiene alguno de los roles permitidos
    const hasPermission = userRoles.some(role => allowedRoles.includes(role));

    if (!hasPermission) {
      // Redirigir a página de acceso denegado o al dashboard correspondiente
      if (userRoles.includes('admin')) {
        return NextResponse.redirect(new URL('/dashboard/admin', request.url));
      } else if (userRoles.includes('vendedor')) {
        return NextResponse.redirect(new URL('/dashboard/vendedor', request.url));
      } else {
        return NextResponse.redirect(new URL('/dashboard/cliente', request.url));
      }
    }

    // Agregar información del usuario a los headers para uso en el servidor
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', session.user.id);
    requestHeaders.set('x-user-email', session.user.email);
    requestHeaders.set('x-user-roles', JSON.stringify(userRoles));

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error('Middleware error:', error);
    return redirectToLogin(request, pathname);
  }
}

function redirectToLogin(request, pathname) {
  const redirectUrl = new URL('/auth/login', request.url);
  redirectUrl.searchParams.set('redirect', pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/auth (auth API routes)
     * - auth/callback (OAuth callback)
     */
    '/((?!_next/static|_next/image|favicon.ico|api/auth|auth/callback).*)',
  ],
};