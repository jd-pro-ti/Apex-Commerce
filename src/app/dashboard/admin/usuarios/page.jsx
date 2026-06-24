import React from 'react'
import { NavbarAdmin } from '@/components/layout/NavbarAdmin'

const page = () => {
    return (
        
        <div>
            <NavbarAdmin/>
            <div className='min-h-screen flex items-center justify-center bg-[#f5f5f0]'>
                <h1 className='text-black'>Usuarios</h1>
            </div>
        </div>
    )
}

export default page