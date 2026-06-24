import React from 'react'
import { NavbarVendedor } from '@/components/layout/NavbarVendedor' 

const productosVendedor = () => {
    return (
        <div>
            <NavbarVendedor />  
            <div className='min-h-screen flex items-center justify-center bg-[#f5f5f0]'>
                <h1 className='text-black'>Mis Productos</h1>
            </div>
        </div>
    )
}

export default productosVendedor