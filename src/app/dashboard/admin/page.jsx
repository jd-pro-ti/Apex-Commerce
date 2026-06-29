// pages/dashboard-admin.jsx
import { 
  Package, 
  TrendingUp, 
  TrendingDown,
  Users,
  CreditCard,
  Clock,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Calendar,
  MoreHorizontal
} from 'lucide-react';
import { NavbarAdmin } from '@/components/layout/NavbarAdmin'

const DashboardAdmin = () => {
  // Métricas globales de administración basadas en la imagen
  const stats = [
    { 
      label: 'Volumen Bruto de Mercancía', 
      value: '$4,822,190.00', 
      change: '+12.4%', 
      isPositive: true,
      icon: CreditCard, 
      color: 'text-slate-600 bg-slate-100',
    },
    { 
      label: 'Usuarios Activos', 
      value: '124,592', 
      change: '+4.2%', 
      isPositive: true,
      icon: Users, 
      color: 'text-slate-600 bg-slate-100',
    },
    { 
      label: 'Vendedores Pendientes', 
      value: '18', 
      change: 'URGENTE', 
      isWarning: true,
      icon: Package, 
      color: 'text-slate-600 bg-slate-100',
    },
    { 
      label: 'Salud de la Plataforma', 
      value: '99.98%', 
      change: 'Normal', 
      isNormal: true,
      icon: ShieldCheck, 
      color: 'text-slate-600 bg-slate-100',
    },
  ];

  // Actividad reciente del sistema en español
  const recentActivity = [
    { id: 'Verificación', admin: 'Sarah Jenkins', target: 'Maison Luxe (V-092)', timestamp: 'Hace 2 min', status: 'COMPLETADO', statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { id: 'Ajuste de Precio', admin: 'Mark Thompson', target: 'Rolex Submariner (P-441)', timestamp: 'Hace 14 min', status: 'REVISADO', statusColor: 'bg-blue-50 text-blue-600 border-blue-100' },
    { id: 'Inicio de Sesión Sospechoso', admin: 'Sistema (Auto)', target: 'Admin #022-X', timestamp: 'Hace 48 min', status: 'INVESTIGANDO', statusColor: 'bg-amber-50 text-amber-600 border-amber-100' },
    { id: 'Reembolso Emitido', admin: 'Alex Vancore', target: 'Pedido #883921', timestamp: 'Hace 1 hora', status: 'COMPLETADO', statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  ];

  // Niveles de Vendedores (Vendor Tiering) adaptado a la analítica de administración
  const vendorTiers = [
    { name: 'Vendedores Elite', percentage: 82, color: 'bg-slate-900' },
    { name: 'Nivel Intermedio', percentage: 45, color: 'bg-slate-400' },
    { name: 'Nuevos Registros', percentage: 24, color: 'bg-slate-300' },
    { name: 'Marcados / Reportados', percentage: 8, color: 'bg-rose-400' },
  ];

  // Datos del gráfico de Ingresos Globales
  const globalRevenueData = [
    { day: 'Ene', sales: 3200 },
    { day: 'Mar', sales: 2800 },
    { day: 'May', sales: 4500 },
    { day: 'Jul', sales: 5600 },
    { day: 'Sep', sales: 2100 },
    { day: 'Nov', sales: 4900 },
  ];

  const maxSales = Math.max(...globalRevenueData.map(d => d.sales));

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans antialiased">
      <NavbarAdmin />
      
      {/* pt-28 asegura una separación ideal de la barra de navegación fija */}
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 md:px-6 lg:px-8">
        
        {/* Encabezado Principal del Centro de Comando */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200/60 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-slate-950 font-bold">
              Centro de Comando
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Resumen del rendimiento general de la plataforma LuxeMarket.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-medium shadow-sm hover:bg-gray-50 transition-colors self-start md:self-auto">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            Últimos 30 Días
          </button>
        </div>

        {/* Cuadrícula de Métricas de Administración */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                {stat.isPositive && (
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    {stat.change} <TrendingUp className="w-3 h-3" />
                  </span>
                )}
                {stat.isWarning && (
                  <span className="text-[10px] font-bold tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md uppercase">
                    {stat.change}
                  </span>
                )}
                {stat.isNormal && (
                  <span className="text-xs text-slate-500 font-medium">
                    {stat.change}
                  </span>
                )}
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 tracking-tight mt-1">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección Intermedia: Gráfico de Ingresos Globales + Niveles de Vendedores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Gráfico de Ingresos Globales */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-serif font-bold text-slate-900">Ingresos Globales</h3>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 font-medium text-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block"></span> Este Año
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block"></span> Año Pasado
                </span>
              </div>
            </div>
            
            {/* Gráfico Visual */}
            <div className="h-60 flex items-end justify-between gap-4 pt-4 px-2">
              {globalRevenueData.map((item) => {
                const height = (item.sales / maxSales) * 100;
                return (
                  <div key={item.day} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
                    <div className="w-full bg-slate-50 rounded-t-xl relative h-full flex items-end overflow-hidden">
                      <div 
                        className="w-full bg-gradient-to-t from-slate-200 via-slate-300 to-slate-400 rounded-t-xl transition-all duration-500 origin-bottom scale-y-100 group-hover:from-slate-700 group-hover:to-slate-900"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Niveles de Vendedores */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">Niveles de Vendedores</h3>
              <div className="space-y-5">
                {vendorTiers.map((tier) => (
                  <div key={tier.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-700">{tier.name}</span>
                      <span className="text-slate-500">{tier.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${tier.color} rounded-full`} style={{ width: `${tier.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full mt-6 text-xs text-slate-600 font-medium hover:text-slate-900 transition-colors flex items-center justify-center gap-1 py-2 border-t border-gray-100">
              Ver Auditoría Detallada
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Actividad Reciente del Sistema (Tabla de Logs) */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h3 className="text-lg font-serif font-bold text-slate-900">Actividad Reciente del Sistema</h3>
            <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Contenedor de la Tabla Adaptable */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-gray-100 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  <th className="py-3 px-6">ACCIÓN</th>
                  <th className="py-3 px-6">VENDEOR</th>
                  <th className="py-3 px-6">ENTIDAD OBJETIVO</th>
                  <th className="py-3 px-6">REGISTRO DE TIEMPO</th>
                  <th className="py-3 px-6 text-right">ESTADO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {recentActivity.map((activity, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-950">{activity.id}</td>
                    <td className="py-4 px-6 text-slate-600">{activity.admin}</td>
                    <td className="py-4 px-6 text-slate-500">{activity.target}</td>
                    <td className="py-4 px-6 text-slate-400">{activity.timestamp}</td>
                    <td className="py-4 px-6 text-right">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide border ${activity.statusColor}`}>
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-slate-50/40 text-center border-t border-gray-100">
            <button className="text-xs font-bold tracking-wider text-slate-600 hover:text-slate-900 transition-colors uppercase">
              Ver Todos los Registros del Sistema
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardAdmin;