import React from 'react'
import { Link } from 'react-router-dom';

// Import Images
import padlock from '../images/icons/padlock.png';

// Import other components
import Button from '../components/Buttons/Button';


const ForgotPassword = () => {
  return (
    <div className='w-full max-w-lg flex flex-col items-center justify-between p-3 text-gray-600'>
        <div className='w-full flex items-center gap-5'>
            <Link to='/'>
                <span><i className='fa fa-arrow-left'></i></span>
            </Link>
            <h1 className='text-3xl text-gray-700'>Forgot Password</h1>
        </div>
        <div className='max-w-md'>
            <img alt='' src={padlock} />
        </div>
        <div className='flex flex-col gap-5 w-full max-w-md pb-5'>
            <p>Select which contact details you want to use to reset your account.</p>
            <button className='p-4 border-2 border-transparent focus:border-cyan-500 rounded-2xl shadow flex items-center gap-4'>
                <span className='flex items-center justify-center w-16 h-16 rounded-full bg-cyan-50 text-cyan-500'><i className='fa fa-message'></i></span>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <h2 className='text-sm font-semibold text-gray-500'>via sms</h2>
                    <p className='font-semibold'>+23481****904</p>
                </div>
            </button>
            <button className='p-4 border-2 border-transparent focus:border-cyan-500 rounded-2xl shadow flex items-center gap-4'>
                <span className='flex items-center justify-center w-16 h-16 rounded-full bg-cyan-50 text-cyan-500'><i className='fa fa-envelope'></i></span>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <h2 className='text-sm font-semibold text-gray-500'>via email</h2>
                    <p className='font-semibold'>nnakw****@gmail.com</p>
                </div>
            </button>
        </div>
        
        <Button
            content='Continue'
            className='rounded-3xl py-3 w-full text-white font-semibold flex items-center justify-center bg-cyan-500 hover:bg-cyan-600'
        />
    </div>
  )
}

export default ForgotPassword