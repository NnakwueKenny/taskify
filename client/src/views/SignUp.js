import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../images/icons/google.png';
import appleLogo from '../images/icons/apple-logo.png';
import facebookLogo from '../images/icons/facebook.png';

const SignUp = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false)
    const [ isEmailFocus, setIsEmailFocus ] = useState(false);
    const [ isPasswordFocus, setIsPasswordFocus ] = useState(false);
  return (
    <div className='flex flex-col justify-between items-center h-full w-full p-3'>
        <div className='w-full max-w-lg flex justify-start py-1'>
            <Link to='/' className='text-gray-500 text-2xl'><span><i className='fa fa-arrow-left'></i></span></Link>
        </div>

        <div className='w-full flex justify-center items-center py-1'>
            <h1 className='text-4xl font-semibold text-gray-600'>Create Your Account</h1>
        </div>

        <form className='w-full max-w-md flex flex-col gap-5 py-2'>
            <div className='relative'>
                <label for='email' className='sr-only'></label>
                <span className={`absolute top-0 left-0 h-full flex items-center px-5 ${isEmailFocus? 'text-cyan-500': 'text-gray-600'}`}><i className='fa fa-envelope'></i></span>
                <input name='email' type='text' placeholder='Email' onFocus={() => setIsEmailFocus(true)} onBlur={() => setIsEmailFocus(false)}  className='rounded-xl border w-full py-3 pl-12 bg-gray-100 border border-transparent focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-base'/>
            </div>
            <div className='relative'>
                <label for='password' className='sr-only'></label>              
                <input name='password' type={`${showPassword? 'text': 'password'}`} placeholder='Password' onFocus={() => setIsPasswordFocus(true)} onBlur={() => setIsPasswordFocus(false)}  className='rounded-xl border w-full py-3 px-12 bg-gray-100 border border-transparent focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-base'/>
                <span className={`absolute top-0 left-0 h-full flex items-center px-5 ${isPasswordFocus? 'text-cyan-500': 'text-gray-600'}`}><i className='fa fa-lock'></i></span>
                <button onClick={() => setShowPassword(prevValue => !prevValue)} type='button' className={`absolute top-0 right-0 h-full flex items-center px-5  ${isPasswordFocus? 'text-cyan-500': 'text-gray-600'}`}>
                    {
                        showPassword?
                        <span><i className='fa fa-eye'></i></span>
                        :
                        <span><i className='fa fa-eye-slash'></i></span>
                    }
                </button>
            </div>
            <div className='w-full flex justify-center items-center gap-3'>
                <input name='remember' type='checkbox' className='h-5 w-5 rounded-md outline-none ring-0 border focus:border-cyan-500 focus:outline-none ring-0 focus:ring-0'/>
                <label for='remember' className='font-semibold text-gray-700'>Remember me</label>
            </div>
            <div className='py-2'>
                <button type='button' className='text-white bg-cyan-500 rounded-3xl py-3 font-semibold w-full shadow-md shadow-cyan-100'>Sign Up</button>
            </div>
        </form>

        <div className='flex flex-col gap-2 w-full max-w-lg'>
            <div className='flex items-center py-3'>
                <div className='border-t w-full'></div>
                <div className='flex justify-center w-20 font-semibold text-gray-600'>or</div>
                <div className='border-t w-full'></div>
            </div>
            <div className='w-full justify-center flex gap-5'>
                <button type='button' className='flex w-full max-w-[90px] justify-center py-4 rounded-xl shadow hover:shadow-md'><img className='w-8' src={facebookLogo} alt='facebook logo'/></button>
                <button type='button' className='flex w-full max-w-[90px] justify-center py-4 rounded-xl shadow hover:shadow-md'><img className='w-8' src={googleLogo} alt='google logo'/></button>
                <button type='button' className='flex w-full max-w-[90px] justify-center py-4 rounded-xl shadow hover:shadow-md'><img className='w-8' src={appleLogo} alt='apple logo'/></button>
            </div>
        </div>

        <div className='py-3 flex justify-center text-gray-700'>
            <p>Already have an account? <Link to='/sign-in' className='text-cyan-500 font-semibold'>Sign In</Link></p>
        </div>
    </div>
  )
}

export default SignUp