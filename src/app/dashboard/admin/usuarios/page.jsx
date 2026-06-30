'use client'; // pages/admin/usuarios.jsx
import { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  UserMinus, 
  MoreVertical, 
  Trash2, 
  Ban, 
  SlidersHorizontal, 
  UserPlus, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { NavbarAdmin } from '@/components/layout/NavbarAdmin';

const UserManagement = () => {
  // Lista base de usuarios
  const [users, setUsers] = useState([
    { id: '#USR-8902', name: 'Julian Casablancas', email: 'julian.c@luxury.com', avatar: '🧑‍🎤', role: 'VENDEDOR', status: 'Activo', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-100', date: 'Oct 12, 2023' },
    { id: '#USR-4421', name: 'Elena Rodríguez', email: 'elena.r@gmail.com', avatar: '👩‍💼', role: 'CLIENTE', status: 'Activo', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-100', date: 'Sep 28, 2023' },
    { id: '#USR-1209', name: 'Marcus Thorne', email: 'm.thorne@estate.io', avatar: '👨‍💻', role: 'VENDEDOR', status: 'Suspendido', statusColor: 'text-rose-600 bg-rose-50 border-rose-100', date: 'Ago 05, 2023' },
    { id: '#USR-5654', name: 'David Chen', email: 'dchen@techflow.com', avatar: '👨‍💼', role: 'CLIENTE', status: 'Activo', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-100', date: 'Jul 19, 2023' },
    { id: '#USR-9901', name: 'Sarah Jenkins', email: 'sarah.j@designco.uk', avatar: '👩‍🎨', role: 'VENDEDOR', status: 'Pendiente', statusColor: 'text-amber-600 bg-amber-50 border-amber-100', date: 'Jun 22, 2023' },
  ]);

  // Estados interactivos de selección y menús
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  
  // NUEVO: Estado para controlar el filtro rápido activo ('TODOS', 'ACTIVOS', 'PENDIENTES', 'SUSPENDIDAS')
  const [currentFilter, setCurrentFilter] = useState('TODOS');

  // Filtrado lógico de la lista en tiempo real basado en el botón seleccionado
  const filteredUsers = users.filter(user => {
    if (currentFilter === 'ACTIVOS') return user.status === 'Activo' && user.role === 'VENDEDOR';
    if (currentFilter === 'PENDIENTES') return user.status === 'Pendiente';
    if (currentFilter === 'SUSPENDIDAS') return user.status === 'Suspendido';
    return true; // 'TODOS'
  });

  // Manejadores de Selección Masiva
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(filteredUsers.map(u => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(item => item !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  // Acciones Masivas
  const handleDeleteSelected = () => {
    if (selectedUsers.length === 0) return;
    if (confirm(`¿Estás seguro de que deseas eliminar ${selectedUsers.length} usuario(s)?`)) {
      setUsers(users.filter(u => !selectedUsers.includes(u.id)));
      setSelectedUsers([]);
    }
  };

  const handleSuspendSelected = () => {
    if (selectedUsers.length === 0) return;
    setUsers(users.map(u => {
      if (selectedUsers.includes(u.id)) {
        return { ...u, status: 'Suspendido', statusColor: 'text-rose-600 bg-rose-50 border-rose-100' };
      }
      return u;
    }));
    setSelectedUsers([]);
  };

  // Acciones de Fila Individual
  const handleDeleteRow = (id) => {
    setUsers(users.filter(u => u.id !== id));
    setSelectedUsers(selectedUsers.filter(item => item !== id));
    setActiveMenu(null);
  };

  const handleSuspendRow = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: 'Suspendido', statusColor: 'text-rose-600 bg-rose-50 border-rose-100' } : u));
    setActiveMenu(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      <NavbarAdmin />
      
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 md:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-slate-200 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-montserrat font-light tracking-tight text-slate-900">
              Gestión de Usuarios
            </h1>
            <p className="text-sm font-light mt-1 text-slate-500">
              Administra todos los participantes de la plataforma, verifica credenciales y controla los niveles de acceso.
            </p>
            <div className="divider-gold mt-2" />
          </div>
          
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-medium shadow-sm hover:bg-slate-50 transition-colors">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              Filtros Avanzados
            </button>
            <button 
              className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-md transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              <UserPlus className="w-3.5 h-3.5" />
              Invitar Usuario
            </button>
          </div>
        </div>

        {/* Módulos de Métricas Interactivos (image_bfc053.png) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { filterId: 'TODOS', label: 'USUARIOS TOTALES', val: '12,482', badge: '+12%', icon: Users, badgeStyle: 'text-emerald-600 bg-emerald-50' },
            { filterId: 'ACTIVOS', label: 'VENDEDORES ACTIVOS', val: '1,240', badge: '+6%', icon: UserCheck, badgeStyle: 'text-emerald-600 bg-emerald-50' },
            { filterId: 'PENDIENTES', label: 'VERIFICACIONES PENDIENTES', val: '48', badge: 'Pendiente', icon: UserMinus, badgeStyle: 'text-slate-500 bg-slate-100' },
            { filterId: 'SUSPENDIDAS', label: 'CUENTAS SUSPENDIDAS', val: '156', badge: 'Acción Requerida', icon: UserX, badgeStyle: 'text-rose-600 bg-rose-50' },
          ].map((card) => {
            const isSelected = currentFilter === card.filterId;
            return (
              <button 
                key={card.filterId}
                onClick={() => {
                  setCurrentFilter(card.filterId);
                  setSelectedUsers([]); // Limpiar selección al cambiar de filtro
                }}
                className={`text-left bg-white rounded-2xl p-5 border shadow-sm hover-lift relative transition-all w-full focus:outline-none ${
                  isSelected ? 'border-amber-400 ring-2 ring-amber-400/20 bg-slate-50/50' : 'border-slate-100'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600'}`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-montserrat">{card.label}</p>
                <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5 font-montserrat">{card.val}</p>
                
                {/* Indicador visual inferior si el filtro está activo */}
                {isSelected && (
                  <div className="absolute bottom-0 left-6 right-6 h-1 rounded-t-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tabla Principal */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          
          {/* Herramientas superiores funcionales */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50/70 border-b border-slate-100 gap-3">
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-300 text-slate-900 focus:ring-slate-400 w-4 h-4"
                  checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                  onChange={handleSelectAll}
                />
                Seleccionar Todo
              </label>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleSuspendSelected}
                  disabled={selectedUsers.length === 0}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedUsers.length > 0 
                      ? 'text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm' 
                      : 'text-slate-300 bg-transparent pointer-events-none'
                  }`}
                >
                  <Ban className="w-3.5 h-3.5" />
                  Suspender {selectedUsers.length > 0 && `(${selectedUsers.length})`}
                </button>
                <button 
                  onClick={handleDeleteSelected}
                  disabled={selectedUsers.length === 0}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedUsers.length > 0 
                      ? 'text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-100 shadow-sm' 
                      : 'text-slate-300 bg-transparent pointer-events-none'
                  }`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Eliminar {selectedUsers.length > 0 && `(${selectedUsers.length})`}
                </button>
              </div>

              {/* Tag indicador del filtro activo actual */}
              {currentFilter !== 'TODOS' && (
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-1 rounded-md font-medium">
                  Filtro: {currentFilter} ({filteredUsers.length})
                  <button onClick={() => setCurrentFilter('TODOS')} className="ml-1.5 font-bold hover:text-amber-950">✕</button>
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3 text-xs text-slate-400 w-full sm:w-auto justify-between sm:justify-end font-montserrat">
              <span>Mostrando 1-{filteredUsers.length} de 12,482</span>
              <div className="flex gap-1">
                <button className="p-1 border border-slate-200 bg-white rounded-md text-slate-600"><ChevronLeft className="w-3.5 h-3.5" /></button>
                <button className="p-1 border border-slate-200 bg-white rounded-md text-slate-600"><ChevronRight className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>

          {/* Renderizado de la tabla interactiva */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold tracking-wider text-slate-400 uppercase bg-white font-montserrat">
                  <th className="py-3 px-6 w-12"></th>
                  <th className="py-3 px-6">Usuario</th>
                  <th className="py-3 px-6">ID de Usuario</th>
                  <th className="py-3 px-6">Rol</th>
                  <th className="py-3 px-6">Estado</th>
                  <th className="py-3 px-6">Fecha de Ingreso</th>
                  <th className="py-3 px-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm bg-white font-light">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-12 text-center text-slate-400 font-normal">
                      No hay usuarios que coincidan con el filtro rápido "{currentFilter}".
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr 
                      key={user.id} 
                      className={`transition-colors ${selectedUsers.includes(user.id) ? 'bg-slate-50/80' : 'hover:bg-slate-50/30'}`}
                    >
                      <td className="py-4 px-6">
                        <input 
                          type="checkbox" 
                          className="rounded border-slate-300 text-slate-900 focus:ring-slate-400 w-4 h-4 cursor-pointer"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => handleSelectRow(user.id)}
                        />
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center select-none">{user.avatar}</span>
                          <div>
                            <p className="font-semibold text-slate-900 leading-none">{user.name}</p>
                            <p className="text-xs text-slate-400 mt-1 font-normal">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-mono text-xs text-slate-400">{user.id}</td>
                      <td className="py-4 px-6">
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-montserrat">
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border font-montserrat ${user.statusColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Activo' ? 'bg-emerald-500' : user.status === 'Pendiente' ? 'bg-amber-500' : 'bg-rose-500'}`} />
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-400 text-xs font-normal">{user.date}</td>
                      <td className="py-4 px-6 text-right relative">
                        <button 
                          onClick={() => setActiveMenu(activeMenu === user.id ? null : user.id)}
                          className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {/* Menú de Acciones Flotante */}
                        {activeMenu === user.id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)} />
                            <div className="absolute right-6 mt-1 w-36 bg-white border border-slate-100 rounded-xl shadow-xl z-20 py-1 text-left">
                              <button 
                                onClick={() => handleSuspendRow(user.id)}
                                className="w-full px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 font-medium"
                              >
                                <Ban className="w-3.5 h-3.5 text-slate-400" /> Suspender
                              </button>
                              <button 
                                onClick={() => handleDeleteRow(user.id)}
                                className="w-full px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 font-bold"
                              >
                                <Trash2 className="w-3.5 h-3.5 text-rose-400" /> Eliminar
                              </button>
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Paginación */}
          <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-montserrat">
            <span>Página 1 de 1,248</span>
            <div className="flex gap-1.5">
              <button className="px-3 py-1.5 border border-slate-200 rounded-xl bg-white font-medium hover:bg-slate-50 text-slate-600">Anterior</button>
              <button className="px-3 py-1.5 text-white rounded-xl font-bold" style={{ backgroundColor: 'var(--primary)' }}>1</button>
              <button className="px-3 py-1.5 border border-slate-200 rounded-xl bg-white font-medium hover:bg-slate-50 text-slate-600">2</button>
              <button className="px-3 py-1.5 border border-slate-200 rounded-xl bg-white font-medium hover:bg-slate-50 text-slate-600">3</button>
              <button className="px-3 py-1.5 border border-slate-200 rounded-xl bg-white font-medium hover:bg-slate-50 text-slate-600">Siguiente</button>
            </div>
          </div>
        </div>

        {/* Bloques de Seguridad e Información Inferior */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-montserrat font-normal text-slate-900 mb-4">Logs de Seguridad</h3>
            <div className="space-y-4">
              {[
                { type: 'error', txt: 'Múltiples intentos fallidos de inicio de sesión detectados', desc: 'Usuario #USR-1209 (Marcus Thorne) desde la IP: 192.168.1.104. Cuenta bloqueada automáticamente por 24 horas.', time: 'Hace 2 horas' },
                { type: 'success', txt: 'Nuevo vendedor verificado con éxito', desc: 'Julian Casablancas completó exitosamente la verificación comercial de Nivel 2.', time: 'Hace 5 horas' },
                { type: 'info', txt: 'Configuración global del sistema modificada', desc: 'El Admin Root actualizó la política de rotación de contraseñas obligatoria a 90 días.', time: 'Hace 1 día' }
              ].map((log, idx) => (
                <div key={idx} className="flex gap-3 items-start pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${log.type === 'error' ? 'bg-rose-500' : log.type === 'success' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{log.txt}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-light">{log.desc}</p>
                    <span className="text-[10px] text-slate-400 font-medium block mt-1 font-montserrat">{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="text-white rounded-2xl p-6 shadow-md flex flex-col justify-between hover-lift"
            style={{ backgroundColor: 'var(--secondary)' }}
          >
            <div>
              <h3 className="text-lg font-montserrat font-normal">Análisis de Crecimiento</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                El ritmo de registro de vendedores está creciendo a un ritmo de <span className="font-semibold" style={{ color: 'var(--tertiary)' }}>3x</span> comparado con los clientes este trimestre. Considera revisar las tasas de onboarding.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-medium text-slate-300 font-montserrat">
                <span>Conversión del Objetivo</span>
                <span className="text-white font-bold">84%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '84%' }} />
              </div>
            </div>
            <button className="w-full mt-6 bg-white text-slate-900 text-xs font-bold py-2.5 rounded-xl hover:bg-slate-100 transition-colors font-montserrat">
              Ver Análisis Detallado
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserManagement;