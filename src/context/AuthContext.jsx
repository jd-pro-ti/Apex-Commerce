"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    checkUser();
    
    // Suscribirse a cambios de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          await fetchUserData(session.user);
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await fetchUserData(session.user);
      }
    } catch (error) {
      console.error("Error checking user:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async (authUser) => {
    try {
      // Obtener datos del usuario desde la tabla Usuario
      const { data: userData, error: userError } = await supabase
        .from('Usuario')
        .select(`
          *,
          UsuarioRol (
            Rol (
              nombreRol
            )
          ),
          Perfil (*)
        `)
        .eq('email', authUser.email)
        .single();

      if (userError) {
        // Si el usuario no existe en la tabla, crearlo
        if (userError.code === 'PGRST116') {
          const newUser = await createUserFromAuth(authUser);
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          return;
        }
        return;
      }

      // Formatear datos del usuario
      const formattedUser = {
        id: userData.idusuario,
        email: userData.email,
        nombre: userData.nombre,
        apellido: userData.apellido,
        role: userData.UsuarioRol?.[0]?.Rol?.nombreRol || 'cliente',
        provider: userData.provider,
        perfil: userData.Perfil?.[0] || null,
        authUser: authUser
      };

      setUser(formattedUser);
      localStorage.setItem("user", JSON.stringify(formattedUser));
    } catch (error) {
      console.error("Error in fetchUserData:", error);
    }
  };

  const createUserFromAuth = async (authUser) => {
    try {
      // Crear usuario en la tabla Usuario
      const { data: newUser, error } = await supabase.rpc('crear_usuario_con_perfil', {
        p_email: authUser.email,
        p_nombre: authUser.user_metadata?.full_name?.split(' ')[0] || authUser.user_metadata?.name || 'Usuario',
        p_apellido: authUser.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
        p_provider: authUser.app_metadata?.provider || 'email',
        p_provider_id: authUser.id
      });

      if (error) throw error;

      // Obtener usuario completo con roles
      const { data: fullUser, error: fetchError } = await supabase
        .from('Usuario')
        .select(`
          *,
          UsuarioRol (
            Rol (
              nombreRol
            )
          ),
          Perfil (*)
        `)
        .eq('idusuario', newUser)
        .single();

      if (fetchError) throw fetchError;

      return {
        id: fullUser.idusuario,
        email: fullUser.email,
        nombre: fullUser.nombre,
        apellido: fullUser.apellido,
        role: fullUser.UsuarioRol?.[0]?.Rol?.nombreRol || 'cliente',
        provider: fullUser.provider,
        perfil: fullUser.Perfil?.[0] || null,
        authUser: authUser
      };
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error login with Google:", error);
      throw error;
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error login with email:", error);
      throw error;
    }
  };

  const register = async (email, password, nombre, apellido) => {
    try {
      // Registrar en Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: `${nombre} ${apellido}`,
          },
        },
      });

      if (authError) throw authError;

      // Crear usuario en la tabla Usuario
      if (authData.user) {
        await createUserFromAuth(authData.user);
      }

      return authData;
    } catch (error) {
      console.error("Error registering:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      localStorage.removeItem("user");
      router.push("/auth/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const value = {
    user,
    loading,
    mounted,
    loginWithGoogle,
    loginWithEmail,
    register,
    logout,
    supabase,
    isAdmin: user?.role === 'admin',
    isVendedor: user?.role === 'vendedor',
    isCliente: user?.role === 'cliente'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
}