import React from 'react'
import logo from '../Assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Contexts/AuthContext'

const Navbar = () => {
    const { user, logout } = UserAuth ()
    const navigate = useNavigate ()

    const handleLogOut = async () => {
        try {
            await logout ()
            navigate ('/')
        } catch (err) {
            console.log (err)
        }
    }

    return (
        <div className='flex justify-between items-center sm:px-12 px-4 w-full absolute z-10 bg-gradient-to-b from-[#111] to-transparent'>
            <Link to='/'>
                <div className=' w-28 h-12 overflow-hidden'>
                    <img src={logo} />
                </div>
            </Link>
            {
                user ? (
                    <div className='flex justify-between items-center sm:w-60 w-36 mt-4 text-sm'>
                        <Link to='/account'>
                            <button className='sm:px-6 sm:py-2 px-3 py-1 rounded text-white text-xs sm:text-base'>Account</button>
                        </Link>

                        <button onClick={handleLogOut} className='sm:px-6 sm:py-2 px-3 py-1 rounded text-white bg-red-600 text-xs sm:text-base'>Log Out</button>
                    </div>
                ) : (
                    <div className='flex justify-between items-center sm:w-52 w-36 mt-4 text-sm'>
                        <Link to='/login'>
                            <button className='sm:px-6 sm:py-2 px-3 py-1 rounded text-white text-xs sm:text-base'>Sign In</button>
                        </Link>

                        <Link to='/signup'>
                            <button className='sm:px-6 sm:py-2 px-3 py-1 rounded text-white text-xs sm:text-base bg-red-600'>Sign Up</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar