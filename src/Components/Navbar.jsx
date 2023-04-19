import React from 'react'
import logo from '../Assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-12 w-full absolute z-10'>
            <div className=' w-28 h-12 overflow-hidden'>
                <img src={logo} />
            </div>
            <div className='flex justify-between items-center w-52 mt-4 text-sm'>
                <button className='px-6 py-2 rounded text-white'>Sign In</button>
                <button className='px-6 py-2 rounded text-white bg-red-600'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar