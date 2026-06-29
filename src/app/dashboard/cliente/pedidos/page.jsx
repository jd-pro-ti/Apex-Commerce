import React from 'react'
import Link from 'next/link'
import { NavbarCliente } from '@/components/layout/NavbarCliente'
import { ShoppingBag, User, Heart, CreditCard, Settings, Truck, Shield, CheckCircle, Download, RefreshCw, ChevronLeft, ChevronRight, Filter} from 'lucide-react'

const pedidosCliente = () => {
  // Datos de ejemplo - puedes reemplazar con tus datos
  const orders = [
    {
      id: 'LM-8829104',
      status: 'INTENSITY',
      statusColor: 'blue',
      date: 'Oct 18, 2024',
      estimatedArrival: 'Estimated arrival: Oct 24, 2024',
      product: 'Patek Philippe Nautilus 5711/1A',
      price: '$142,500.00',
      description: 'Inclusive of white-glove shipping',
      tracking: true
    },
    {
      id: 'LM-7210943',
      status: 'AUTHENTICATING',
      statusColor: 'yellow',
      date: 'Oct 12, 2024',
      estimatedArrival: 'Expert inspection in progress',
      product: '1973 Porsche 911 Carrera RS 2.7',
      price: '$895,000.00',
      description: 'Escrow payment secured',
      tracking: false
    },
    {
      id: 'LM-6652190',
      status: 'DELIVERED',
      statusColor: 'green',
      date: 'Sept 22, 2024',
      estimatedArrival: 'Received on Sept 28, 2024',
      product: 'Hermès Birkin 35 Togo Burgundy',
      price: '$28,400.00',
      description: 'Signed for by recipient',
      tracking: false
    }
  ]

  const statusIcons = {
    'INTENSITY': <Truck className="w-4 h-4" />,
    'AUTHENTICATING': <Shield className="w-4 h-4" />,
    'DELIVERED': <CheckCircle className="w-4 h-4" />
  }

  const statusClasses = {
    'INTENSITY': 'bg-blue-50 text-blue-700 border-blue-200',
    'AUTHENTICATING': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    'DELIVERED': 'bg-green-50 text-green-700 border-green-200'
  }

  return (
    <div className="min-h-screen bg-[#f5f5f6]">
      <NavbarCliente />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Dashboard */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Dashboard</h2>
              <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <span className="text-sm">Overview</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-100 font-medium text-gray-900">
                  <span className="text-sm">My Orders</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Wishlist</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm">Payments</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Settings</span>
                </a>
              </nav>
            </div>

            {/* Filter Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Filter Orders</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Order Status</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                    <option>All Statuses</option>
                    <option>Intensity</option>
                    <option>Authenticating</option>
                    <option>Delivered</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Time Period</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                    <option>Past 3 Months</option>
                    <option>Past 6 Months</option>
                    <option>Past Year</option>
                    <option>All Time</option>
                  </select>
                </div>
                <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  APPLY FILTERS
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content - Orders */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">Order History</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Manage your curated acquisitions and track your heritage pieces.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Showing 12 orders</span>
                <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Status Badge */}
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-medium ${statusClasses[order.status]}`}>
                        {statusIcons[order.status]}
                        <span>{order.status}</span>
                      </div>
                      
                      {/* Estimated Arrival */}
                      <p className="text-sm text-gray-500 mt-2">{order.estimatedArrival}</p>
                      
                      {/* Product */}
                      <h3 className="text-lg font-serif font-semibold text-gray-900 mt-1">
                        {order.product}
                      </h3>
                      
                      {/* Order Details */}
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-gray-500">
                        <span>{order.id}</span>
                        <span>•</span>
                        <span>Purchased {order.date}</span>
                      </div>
                      
                      {/* Price */}
                      <p className="text-xl font-bold text-gray-900 mt-2">{order.price}</p>
                      <p className="text-sm text-gray-500">{order.description}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-start md:items-end space-y-2">
                      {order.tracking && (
                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors w-full md:w-auto">
                          <Truck className="w-4 h-4" />
                          <span>TRACK SHIPMENT</span>
                        </button>
                      )}
                      <Link href="/dashboard/cliente/pedidos/detalle_pedido">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors w-full md:w-auto">
                          VIEW DETAILS
                        </button>
                      </Link>
                      {order.status === 'DELIVERED' && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            <Download className="w-4 h-4" />
                            <span>Receipt</span>
                          </button>
                          <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            <RefreshCw className="w-4 h-4" />
                            <span>Buy Again</span>
                          </button>
                          <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            Request Return
                          </button>
                        </div>
                      )}
                      {order.status === 'AUTHENTICATING' && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          <button className="px-3 py-1.5 text-sm text-yellow-700 bg-yellow-50 rounded-lg border border-yellow-200">
                            VERIFICATION PENDING
                          </button>
                          <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            CONTACT SPECIALIST
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <div className="flex flex-wrap justify-center gap-2">
                <button className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">2</button>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">3</button>
                <span className="px-3 py-1.5 text-gray-400">...</span>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">8</button>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto">
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">The House</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Our Story</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sustainability</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Authenticity</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Journal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Client Services</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Concierge Services</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Private Appointments</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Connect</h3>
              <div className="mt-4 flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <span className="text-sm">IG</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <span className="text-sm">TW</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <span className="text-sm">LI</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 LuxeMarket. Committed to Heritage and Sustainability.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default pedidosCliente