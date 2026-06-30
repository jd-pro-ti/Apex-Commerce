import React from 'react'
import Link from 'next/link'
import { NavbarCliente } from '@/components/layout/NavbarCliente'
import {  ArrowLeft, Heart,Star,Shield,Clock,Truck,ShoppingBag,User} from 'lucide-react'

const DetallePedido = () => {
  const relatedProducts = [
    {
      name: "Jacquard's Point Royale One 'Junbo'",
      price: "$84,500.00",
      image: "JP"
    },
    {
      name: "Vacheron Constantin Oversize Self-Winding",
      price: "$184,500.00",
      image: "VC"
    },
    {
      name: "Bous Dynotes Platinum 'Ice Blue'",
      price: "$184,500.00",
      image: "BD"
    },
    {
      name: "Auth. Incl. Agaral Sagita",
      price: "$84,500.00",
      image: "AS"
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f6]">
      <NavbarCliente />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/dashboard/cliente/pedidos" className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Orders</span>
          </Link>
        </div>

        {/* Product Main Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-serif text-gray-500">⌚</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-serif font-bold text-gray-900">
                    Nautilus Ref. 5711/1A-010
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    The pinnacle of sports-luxe horology. Featuring the iconic rounded octagonal bezel 
                    and horizontal embossed dial inlay.
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-gray-900">$184,500.00</span>
                  <span className="text-xl text-gray-400 line-through">$84,500.00</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9 (87 reviews)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  ADD TO CART
                </button>
                <button className="w-full border-2 border-gray-900 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  ARRANGE PRIVATE SESSIONS
                </button>
              </div>

              {/* Product Intelligence */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Product Intelligence</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">CASE HISTORY</p>
                    <p className="text-sm font-medium text-gray-900">Stainless Steel</p>
                    <p className="text-xs text-gray-400">40.0 mm</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">CASE SIZE</p>
                    <p className="text-sm font-medium text-gray-900">3245 C</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">INDUSTRIALIZATION</p>
                    <p className="text-sm font-medium text-gray-900">2.0mm</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">CUSTOMER</p>
                    <p className="text-sm font-medium text-gray-900">Nautilus Field-West</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>White-glove Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Acquisitions */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
            <h2 className="text-xl font-serif font-bold text-gray-900">Related Acquisitions</h2>
            <p className="text-sm text-gray-500">Curated selection for the discerning collector.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <span className="text-4xl font-serif text-gray-400">{product.image}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                  <p className="text-lg font-bold text-gray-900 mt-2">{product.price}</p>
                  <button className="w-full mt-3 bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900">Authenticity Verified</h3>
            <p className="text-sm text-gray-500 mt-1">Every piece certified by our experts</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900">White-glove Delivery</h3>
            <p className="text-sm text-gray-500 mt-1">Secure shipping with insurance</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900">Concierge Support</h3>
            <p className="text-sm text-gray-500 mt-1">24/7 personal assistance</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Terms</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Track Order</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Shipping Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Return</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sustainability Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Confidential</h3>
              <p className="text-xs text-gray-500 mt-4 italic">
                Indicates that the information contained in this document is privileged, confidential, 
                and may be legally binding.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © 2024 LuxeMarket. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DetallePedido