import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../images/icons/google.png';
import appleLogo from '../images/icons/apple-logo.png';
import facebookLogo from '../images/icons/facebook.png';

const FillProfile = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);
    const [ isPhoneFocus, setIsPhoneFocus ] = useState(false);
    const [ isPasswordFocus, setIsPasswordFocus ] = useState(false);

  return (
    <div className='flex flex-col justify-between md:gap-6 items-center h-full w-full p-3 py-5'>
        <div className='w-full max-w-lg flex items-center gap-4 text-gray-600'>
            <Link to='/'><span className='text-2xl'><i className='fa fa-arrow-left'></i></span></Link>
            <h1 className='text-3xl font-semibold'>Fill Your Profile</h1>
        </div>
        <div className='w-full max-w-lg flex flex-col items-center gap-5'>
            <div className='relative'>
                <span className='flex h-28 w-28 border rounded-full bg-gray-50'></span>
                <button className='absolute bottom-1 right-1 text-2xl text-cyan-500'><i className='fa fa-edit'></i></button>
            </div>
            <div className='relative w-full pt-4'>
                <label htmlFor='fullname' className='sr-only'></label>
                <input name='fullname' type='text' placeholder='Full Name' className='text-base rounded-xl border w-full py-2.5 px-4 bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-lg'/>
            </div>
            <div className='relative w-full'>
                <label htmlFor='username' className='sr-only'></label>
                <input name='username' type='text' placeholder='Username' className='text-base rounded-xl border w-full py-2.5 px-4 bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-lg'/>
            </div>
            <div className='relative w-full'>
                <label htmlFor='dob' className='sr-only'></label>
                <input name='dob' type='date' placeholder='Date of Birth' onFocus={() => setIsPasswordFocus(true)} onBlur={() => setIsPasswordFocus(false)}  className='text-base rounded-xl border w-full py-2.5 bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-lg'/>
                <button type='button' className={`absolute top-0 right-0 h-full flex items-center px-5  ${isPasswordFocus? 'text-cyan-500': 'text-gray-600'}`}>
                    {
                        showPassword?
                        <span><i className='fa fa-eye'></i></span>
                        :
                        <span><i className='fa fa-eye-slash'></i></span>
                    }
                </button>
            </div>
            <div className='relative w-full'>
                <label htmlFor='email' className='sr-only'></label>              
                <input name='email' type='text' placeholder='Email' onFocus={() => setIsPasswordFocus(true)} onBlur={() => setIsPasswordFocus(false)}  className='text-base rounded-xl border w-full py-2.5 pr-12 bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-lg'/>
                <span className={`absolute top-0 right-0 h-full flex items-center px-5 ${isPasswordFocus? 'text-cyan-500': 'text-gray-600'}`}><i className='fa fa-envelope'></i></span>
            </div>
            <div className={`relative w-full flex items-center text-base rounded-xl border overflow-hidden bg-gray-50 ${isPhoneFocus? 'border-cyan-500 bg-cyan-50': ''}`}>
                <label htmlFor='country-code' className='sr-only'></label>
                <select name='country-code' className={`h-full w-24 flex items-center px-5 ${isPasswordFocus? 'text-cyan-500': 'text-gray-600'} border-0 bg-transparent`}>
                    <option>+234 NG</option>
                    <option>+1 US</option>
                </select>
                <label htmlFor='phone' className='sr-only'></label>              
                <input name='phone' type='text' placeholder='Phone Number' onFocus={() => setIsPhoneFocus(true)} onBlur={() => setIsPhoneFocus(false)}  className='text-base w-full py-2.5 bg-transparent border-0 border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-lg'/>
            </div>
            <div className='relative w-full'>
                <label htmlFor='role' className='sr-only'></label>
                <input name='role' type='text' placeholder='Role' className='text-base rounded-xl border w-full py-2.5 px-4 bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600 text-lg'/>
            </div>
        </div>
        <button className='rounded-3xl py-3 w-full text-white font-semibold flex items-center justify-center bg-cyan-500 hover:bg-cyan-600'>Continue</button>
    </div>
  )
}

export default FillProfile;