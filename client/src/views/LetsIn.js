import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../images/icons/google.png';
import appleLogo from '../images/icons/apple-logo.png';
import facebookLogo from '../images/icons/facebook.png';

const LetsIn = () => {
  return (
    <div className='flex flex-col justify-between items-center h-full w-full p-3'>
      <div className='w-full max-w-lg flex justify-start py-1'>
        <Link to='/' className='text-gray-500 text-2xl'><span><i className='fa fa-arrow-left'></i></span></Link>
      </div>

      <div className='w-full flex justify-center items-center py-1'>
        <h1 className='text-4xl font-semibold text-gray-600'>Let's You In</h1>
      </div>

      <div className='w-full max-w-md'>
        <div className='w-full flex flex-col gap-5 py-2'>
          <button className='border w-full flex justify-center items-center gap-3 font-semibold text-gray-600 rounded-xl py-3.5 shadow-md'>
            <div className='h-6 w-6'><img src={facebookLogo} alt=''/></div>
            Continue with facebook
          </button>
          <button className='border w-full flex justify-center items-center gap-3 font-semibold text-gray-600 rounded-xl py-3.5 shadow-md'>
            <div className='h-6 w-6'><img src={googleLogo} alt=''/></div>
            Continue with Google
          </button>
          <button className='border w-full flex justify-center items-center gap-3 font-semibold text-gray-600 rounded-xl py-3.5 shadow-md'>
            <div className='h-6 w-6'><img src={appleLogo} alt=''/></div>
            Continue with Apple
          </button>
        </div>

        <div className='flex items-center py-10'>
          <div className='border-t w-full'></div>
          <div className='flex justify-center w-20 font-semibold text-gray-600'>or</div>
          <div className='border-t w-full'></div>
        </div>

        <div className='py-4'>
          <button className='text-white bg-cyan-500 rounded-3xl py-3 font-semibold w-full shadow-md shadow-cyan-200'>Sign in with Password</button>
        </div>
      </div>

      <div className='py-3 flex justify-center text-gray-700'>
        <p>Don't have an account? <Link to='/' className='text-cyan-500 font-semibold'>Sign up</Link></p>
      </div>

    </div>
  )
}

export default LetsIn