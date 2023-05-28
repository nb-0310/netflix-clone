import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Contexts/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate ()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp (email, password)
      navigate ('/')
    } catch (err) {
      console.log (err)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
      <div className='sm:w-[450px] w-full h-[600px] bg-transparent z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:bg-black/75 text-white sm:px-12 px-8 py-24'>
      <h1 className='sm:text-3xl text-2xl font-bold mb-4 sm:text-left text-center'>Sign Up</h1>
          <form className='flex flex-col justify-between w-full'>
            <input type="email" className='w-full bg-gray-700 sm:p-3 p-2 my-4' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" className='w-full bg-gray-700 sm:p-3 p-2 my-4' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} />
            <button type='submit' className='bg-red-600 py-2 px-4 text-white font-bold my-4' onClick={handleSubmit}>Sign Up</button>
          </form>

          <div className='flex items-center w-full justify-between py-4'>
            <p className='text-gray-600'>Already a user?</p>
            <Link to='/login'>
            <span className='text-white font-bold'>Sign In</span>
            </Link>
          </div>
        </div>
        <div className='absolute w-full h-full opacity-100 bg-gradient-to-r from-[#111] to-transparent'></div>
        <img className='hidden sm:block w-full h-full object-cover object-center' src='https://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg' alt='/' />
      </div>
    </>
  )
}

export default Signup