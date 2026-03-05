'use client'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function DashboardLayout({ children }) {
    const [] = useState(false)

    return (
        <div className='flex min-h-screen bg-gray-100'>
            <Sidebar open={open} setOpen={setOpen} />

            <div className='flex-1 flex flex-col'>

                <Header setOpen={setOpen} />

                <main className='p-8 flex-1 overflow-y-auto'>
                    {children}
                </main>
            </div>
        </div>
    )
}