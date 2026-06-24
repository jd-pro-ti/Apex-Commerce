import React from 'react'
import { NavbarCliente } from '@/components/layout/NavbarCliente'  

const pedidosCliente = () => {
    return (
        <div>
            <NavbarCliente />  
            <div className='min-h-screen flex items-center justify-center bg-[#f5f5f0]'>
                <h1 className='text-black'>Mis Pedidos</h1>
            </div>
        </div>
    )
}

export default pedidosCliente