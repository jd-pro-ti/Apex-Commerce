'use client'; // pages/admin/reportes.jsx
import { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  FileSpreadsheet, 
  FileText, 
  TrendingUp, 
  ShieldAlert, 
  Layers, 
  RefreshCw, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';
import { NavbarAdmin } from '@/components/layout/NavbarAdmin';

const AdvancedReports = () => {
  // Estados para simular interactividad y descargas
  const [dateRange, setDateRange] = useState('Este Mes');
  const [downloadingReport, setDownloadingReport] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Simulación de descarga de reportes
  const triggerDownload = (reportName) => {
    setDownloadingReport(reportName);
    setSuccessMessage('');
    
    setTimeout(() => {
      setDownloadingReport(null);
      setSuccessMessage(`¡Reporte "${reportName}" generado y descargado con éxito!`);
      setTimeout(() => setSuccessMessage(''), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      <NavbarAdmin />
      
      {/* pt-28 evita colisiones con el Navbar superior fijo */}
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 md:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-montserrat font-light tracking-tight text-slate-900">
              Reportes Avanzados
            </h1>
            <p className="text-sm font-light mt-1 text-slate-500">
              Centro de inteligencia analítica para la exportación de métricas, auditoría de seguridad y balances comerciales.
            </p>
            <div className="divider-gold mt-2" />
          </div>
          
          {/* Selector de Rango de Fecha Interactiva */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl text-xs font-medium shadow-sm text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Rango:</span>
              <select 
                value={dateRange} 
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-transparent font-semibold border-0 p-0 focus:ring-0 cursor-pointer text-slate-900"
              >
                <option value="Hoy">Hoy</option>
                <option value="Últimos 7 días">Últimos 7 días</option>
                <option value="Este Mes">Este Mes</option>
                <option value="Último Trimestre">Último Trimestre</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notificaciones de Feedback Interactivo */}
        {successMessage && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 text-sm animate-scale-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="font-medium">{successMessage}</span>
          </div>
        )}

        {/* Bloque de Tarjetas de Métricas Clave del Reporte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { label: 'VOLUMEN TRANSMITIDO', val: '$342,850.00', change: '+14.2%', icon: TrendingUp, desc: 'Filtro aplicado: ' + dateRange },
            { label: 'COMISIONES NETAS (APEX)', val: '$28,420.50', change: '+8.6%', icon: Layers, desc: 'Margen neto acumulado' },
            { label: 'NUEVOS APLICANTES', val: '1,420', change: '+22.1%', icon: BarChart3, desc: 'Vendedores postulados' },
            { label: 'ALERTAS DE RIESGO', val: '3', change: '-50%', isRisk: true, icon: ShieldAlert, desc: 'Incidentes en proceso' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover-lift">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-50 text-slate-600">
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  stat.isRisk ? 'text-rose-600 bg-rose-50' : 'text-emerald-600 bg-emerald-50'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-montserrat">{stat.label}</p>
              <p className="text-xl font-bold text-slate-900 tracking-tight mt-0.5 font-montserrat">{stat.val}</p>
              <p className="text-[11px] text-slate-400 mt-2 font-light">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Panel Central: Generador y Exportador de Archivos */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-8">
          <div className="p-5 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-montserrat font-normal text-slate-900">Catálogo de Informes Disponibles</h3>
              <p className="text-xs text-slate-400 mt-0.5 font-light">Selecciona el módulo analítico que deseas compilar.</p>
            </div>
            <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-0.5 rounded">MODO ADMIN</span>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              { id: 'FIN', name: 'Balance Financiero y Comisiones Netas', format: 'Excel (XLSX)', desc: 'Reporte exhaustivo sobre pasarelas de pago, retenciones automáticas y comisiones del ecosistema Apex.', type: 'XLSX', icon: FileSpreadsheet },
              { id: 'USR', name: 'Auditoría de Comportamiento de Usuarios', format: 'PDF Firmado', desc: 'Registros de actividad, bloqueos preventivos de cuentas, suspensiones y flujos de logins sospechosos.', type: 'PDF', icon: FileText },
              { id: 'VEN', name: 'Desempeño Comercial de Vendedores Tier 1 & 2', format: 'Excel (XLSX)', desc: 'Volumen bruto de ventas individuales, listado de inventario de alta rotación y disputas abiertas.', type: 'XLSX', icon: FileSpreadsheet },
              { id: 'SYS', name: 'Métricas de Infraestructura y Logs del Sistema', format: 'CSV Estructurado', desc: 'Tiempos de respuesta de la API, cambios globales de contraseñas de Root Admin y configuraciones críticas.', type: 'CSV', icon: FileText },
            ].map((report) => (
              <div key={report.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/40 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl shrink-0 ${report.type === 'PDF' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    <report.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      {report.name}
                      <span className="text-[10px] font-normal font-mono bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded">
                        {report.format}
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light max-w-3xl">
                      {report.desc}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <button
                    onClick={() => triggerDownload(report.name)}
                    disabled={downloadingReport !== null}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold border border-slate-200 rounded-xl bg-white text-slate-700 shadow-sm hover:bg-slate-50 transition-all disabled:opacity-50 w-full sm:w-auto justify-center font-montserrat"
                  >
                    {downloadingReport === report.name ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-500" />
                        Compilando...
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-slate-400" />
                        Generar Reporte
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fila Inferior: Historial de Consultas Realizadas y Panel de Control Adicional */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Historial de Descargas (Auditoría interna) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-montserrat font-normal text-slate-900">Historial Reciente de Auditoría</h3>
              <span className="text-xs text-slate-400 font-light">Últimas 3 descargas</span>
            </div>
            <div className="space-y-3">
              {[
                { admin: 'Admin Root', action: 'Exportó Balance Financiero', target: 'Periodo Q2_2026.xlsx', time: 'Hace 10 min', status: 'Exitoso' },
                { admin: 'Elena R. (Moderador)', action: 'Descargó Auditoría de Usuarios', target: 'Suspensiones_Junio.pdf', time: 'Hace 2 horas', status: 'Exitoso' },
                { admin: 'Admin Root', action: 'Compiló Logs del Sistema', target: 'API_Error_Logs.csv', time: 'Ayer', status: 'Exitoso' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs p-3 bg-slate-50/60 rounded-xl border border-slate-100/40">
                  <div>
                    <p className="font-semibold text-slate-900">{item.action}</p>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5">Por: {item.admin} • Archivo: <span className="font-mono">{item.target}</span></p>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold text-[10px] block w-fit ml-auto">
                      {item.status}
                    </span>
                    <span className="text-[10px] text-slate-400 font-light mt-1 block">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Caja Informativa de Configuración Automatizada */}
          <div 
            className="text-white rounded-2xl p-6 shadow-md flex flex-col justify-between hover-lift"
            style={{ backgroundColor: 'var(--secondary)' }}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-montserrat font-normal">Suscripción Programada</h3>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </div>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed font-light">
                Actualmente tienes configurada la entrega automatizada de balances los días <span className="font-semibold" style={{ color: 'var(--tertiary)' }}>1 de cada mes</span> directamente a tu correo institucional.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-800 mt-4">
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>ÚLTIMO ENVÍO:</span>
                <span className="text-slate-200">01 Jun 2026</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>PRÓXIMO ENVÍO:</span>
                <span className="text-slate-200">01 Jul 2026</span>
              </div>
            </div>

            <button className="w-full mt-5 bg-white text-slate-900 text-xs font-bold py-2.5 rounded-xl hover:bg-slate-100 transition-colors font-montserrat">
              Modificar Programación
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdvancedReports;