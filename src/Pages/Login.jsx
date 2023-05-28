import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Contexts/AuthContext'

const Login = () => {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const {user, login} = UserAuth ()
  const navigate = useNavigate ()
  const [err, setErr] = useState (false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login (email, password)
      navigate ('/')
    } catch (err) {
      setErr (true)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <div className='sm:w-[450px] w-full h-[600px] bg-transparent z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:bg-black/75 text-white sm:px-12 px-8 py-24'>
          <h1 className='sm:text-3xl text-2xl font-bold mb-4 sm:text-left text-center'>Sign In</h1>
          <form onSubmit={handleSubmit} className='flex flex-col justify-between w-full'>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full bg-gray-700 sm:p-3 p-2 my-4' placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" className='w-full bg-gray-700 sm:p-3 p-2 my-4' placeholder='Password' />
            {err ? (
              <div className='text-red-600 font-bold'>Incorrect Password, Please Try Again</div>
            ) : ''}
            <button type='submit' className='bg-red-600 py-2 px-4 text-white font-bold my-4'>Login</button>
          </form>

          <div className='flex items-center w-full justify-between py-4'>
            <p className='text-gray-600'>Don't have an account?</p>
            <Link to='/signup'>
            <span className='text-white font-bold'>Sign Up</span>
            </Link>
          </div>
        </div>
        <div className='absolute w-full h-full opacity-100 bg-gradient-to-r from-[#111] to-transparent'></div>
        <img className='hidden sm:block w-full h-full object-cover object-center' src='https://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg' alt='/' />
      </div>
    </>
  )
}

export default Login