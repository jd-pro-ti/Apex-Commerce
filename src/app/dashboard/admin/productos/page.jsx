'use client';
// pages/admin/productos.jsx
import { useState } from 'react';
import { 
  ShoppingBag, 
  ShieldAlert, 
  CheckCircle2, 
  MoreVertical, 
  SlidersHorizontal, 
  Search, 
  EyeOff, 
  User, 
  ChevronLeft, 
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { NavbarAdmin } from '@/components/layout/NavbarAdmin';

const ProductModeration = () => {
  // Estado simulado con productos y el vendedor que los publicó
  const [products, setProducts] = useState([
    { id: '#PROD-4021', name: 'Laptop Pro 16" Carbon', category: 'Electrónica', price: '$1,299.00', seller: 'Julian Casablancas (luxury.com)', stock: 14, status: 'Aprobado', isAdultOnly: false },
    { id: '#PROD-8832', name: 'Licor de Agave Reserva Especial', category: 'Bebidas', price: '$85.00', seller: 'Elena Rodríguez (gmail.com)', stock: 45, status: 'Aprobado', isAdultOnly: true },
    { id: '#PROD-1102', name: 'Suplemento Alpha Focus Max', category: 'Salud', price: '$49.90', seller: 'Marcus Thorne (estate.io)', stock: 120, status: 'Pendiente', isAdultOnly: false },
    { id: '#PROD-5561', name: 'Set de Cuchillos Profesionales', category: 'Cocina', price: '210.00', seller: 'David Chen (techflow.com)', stock: 8, status: 'Aprobado', isAdultOnly: false },
    { id: '#PROD-9942', name: 'Videojuego Cyber-Gothic 2077', category: 'Entretenimiento', price: '$59.99', seller: 'Sarah Jenkins (designco.uk)', stock: 300, status: 'Suspendido', isAdultOnly: true },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);
  const [filterType, setFilterType] = useState('TODOS');

  // Acciones de moderación interactiva
  const toggleAdultOnly = (id) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, isAdultOnly: !p.isAdultOnly } : p
    ));
    setActiveMenu(null);
  };

  const changeStatus = (id, newStatus) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, status: newStatus } : p
    ));
    setActiveMenu(null);
  };

  // Filtrado lógico en tiempo real
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.seller.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    
    if (filterType === 'MAS_18') return p.isAdultOnly;
    if (filterType === 'PENDIENTES') return p.status === 'Pendiente';
    if (filterType === 'SUSPENDIDOS') return p.status === 'Suspendido';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      <NavbarAdmin />
      
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 md:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-montserrat font-light tracking-tight text-slate-900">
              Moderación de Productos
            </h1>
            <p className="text-sm font-light mt-1 text-slate-500">
              Supervisa el catálogo global del sistema, restringe contenido sensible y gestiona permisos de publicación.
            </p>
            <div className="divider-gold mt-2" />
          </div>

          {/* Barra de Búsqueda Integrada */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Buscar producto o vendedor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 pl-10 pr-4 py-2 rounded-xl text-xs font-medium shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
            />
          </div>
        </div>

        {/* Tarjetas de Resumen de Moderación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { id: 'TODOS', label: 'CATÁLOGO TOTAL', val: products.length, icon: ShoppingBag, color: 'text-slate-600 bg-slate-100' },
            { id: 'MAS_18', label: 'RESTRICCIÓN +18', val: products.filter(p => p.isAdultOnly).length, icon: AlertTriangle, color: 'text-amber-600 bg-amber-50' },
            { id: 'PENDIENTES', label: 'REVISIÓN PENDIENTE', val: products.filter(p => p.status === 'Pendiente').length, icon: ShieldAlert, color: 'text-blue-600 bg-blue-50' },
            { id: 'SUSPENDIDOS', label: 'PRODUCTOS BAJADOS', val: products.filter(p => p.status === 'Suspendido').length, icon: EyeOff, color: 'text-rose-600 bg-rose-50' },
          ].map((card) => (
            <button
              key={card.id}
              onClick={() => setFilterType(card.id)}
              className={`text-left bg-white rounded-2xl p-5 border shadow-sm hover-lift transition-all ${
                filterType === card.id ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-100'
              }`}
            >
              <div className="p-2.5 rounded-xl w-fit mb-4 className font-sans font-medium select-none ${card.color}">
                <card.icon className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-montserrat">{card.label}</p>
              <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5 font-montserrat">{card.val}</p>
            </button>
          ))}
        </div>

        {/* Tabla Control de Contenido */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-montserrat">
            <span className="font-medium text-slate-700">Mostrando {filteredProducts.length} Productos</span>
            {filterType !== 'TODOS' && (
              <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px]">Filtro: {filterType}</span>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold tracking-wider text-slate-400 uppercase bg-white font-montserrat">
                  <th className="py-3 px-6">Producto</th>
                  <th className="py-3 px-6">Publicado Por (Vendedor)</th>
                  <th className="py-3 px-6">Categoría / SKU</th>
                  <th className="py-3 px-6">Precio / Stock</th>
                  <th className="py-3 px-6">Restricción</th>
                  <th className="py-3 px-6">Estado</th>
                  <th className="py-3 px-6 text-right">Acciones de Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm bg-white font-light">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-12 text-center text-slate-400">
                      No se encontraron productos bajo este filtro.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50/40 transition-colors">
                      {/* Detalles del Producto */}
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-semibold text-slate-900 leading-none">{product.name}</p>
                          <p className="text-[11px] font-mono text-slate-400 mt-1">{product.id}</p>
                        </div>
                      </td>

                      {/* VENDEDOR QUE LO PUBLICÓ */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="p-1 bg-slate-100 rounded text-slate-500">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-700 font-medium">{product.seller}</span>
                        </div>
                      </td>

                      {/* Categoría */}
                      <td className="py-4 px-6 text-xs text-slate-500 font-normal">{product.category}</td>

                      {/* Precio / Inventario */}
                      <td className="py-4 px-6">
                        <p className="font-medium text-slate-900 text-xs">{product.price}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{product.stock} unidades</p>
                      </td>

                      {/* Etiqueta +18 / Todo Público */}
                      <td className="py-4 px-6">
                        {product.isAdultOnly ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md font-montserrat">
                            <AlertTriangle className="w-3 h-3" />
                            NO APTO MENORES (+18)
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                            Todo Público
                          </span>
                        )}
                      </td>

                      {/* Estado en Sistema */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border font-montserrat ${
                          product.status === 'Aprobado' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' :
                          product.status === 'Pendiente' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                          'text-rose-600 bg-rose-50 border-rose-100'
                        }`}>
                          {product.status}
                        </span>
                      </td>

                      {/* Menú Flotante de Acciones */}
                      <td className="py-4 px-6 text-right relative">
                        <button 
                          onClick={() => setActiveMenu(activeMenu === product.id ? null : product.id)}
                          className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {activeMenu === product.id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)} />
                            <div className="absolute right-6 mt-1 w-52 bg-white border border-slate-100 rounded-xl shadow-xl z-20 py-1 text-left">
                              
                              {/* Acción Clave: +18 */}
                              <button 
                                onClick={() => toggleAdultOnly(product.id)}
                                className={`w-full px-4 py-2 text-xs flex items-center gap-2 font-medium ${
                                  product.isAdultOnly ? 'text-slate-600 hover:bg-slate-50' : 'text-amber-700 hover:bg-amber-50'
                                }`}
                              >
                                <AlertTriangle className="w-3.5 h-3.5" />
                                {product.isAdultOnly ? 'Quitar Restricción +18' : 'Marcar: No Apto Menores'}
                              </button>

                              <div className="h-px bg-slate-100 my-1" />

                              {/* Cambios de Estado Directos */}
                              {product.status !== 'Aprobado' && (
                                <button 
                                  onClick={() => changeStatus(product.id, 'Aprobado')}
                                  className="w-full px-4 py-2 text-xs text-emerald-600 hover:bg-emerald-50 flex items-center gap-2 font-medium"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Aprobar Producto
                                </button>
                              )}

                              {product.status !== 'Suspendido' && (
                                <button 
                                  onClick={() => changeStatus(product.id, 'Suspendido')}
                                  className="w-full px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 font-medium"
                                >
                                  <EyeOff className="w-3.5 h-3.5" /> Suspender Publicación
                                </button>
                              )}
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
            <span>Página 1 de 45</span>
            <div className="flex gap-1.5">
              <button className="px-3 py-1.5 border border-slate-200 rounded-xl bg-white text-slate-600 font-medium">Anterior</button>
              <button className="px-3 py-1.5 text-white rounded-xl font-bold" style={{ backgroundColor: 'var(--primary)' }}>1</button>
              <button className="px-3 py-1.5 border border-slate-200 rounded-xl bg-white text-slate-600 font-medium">Siguiente</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductModeration;