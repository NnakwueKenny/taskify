import React, { useState } from 'react';
import Button from '../components/Buttons/Button';
import BackArrow from '../components/navigations/BackArrow';

// Import images
import verifiedBadge from '../images/icons/verified-badge.png';
import resetPasswordSuccess from '../images/icons/reset_password_success.png';
import { Link } from 'react-router-dom';

const CreatePassword = () => {
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPass, setShowConfirmPass ] = useState(false);
    const [ isPasswordFocus, setIsPasswordFocus ] = useState(false);
    const [ isConfirmPassFocus, setIsConfirmPassFocus ] = useState(false);
    const [ isSuccess, setIsSuccess ] = useState(false)

  return (
    <div className='relative'>
        {
            isSuccess && 
            <div className='fixed top-0 left-0 h-full w-full flex justify-center items-center p-8 bg-gray-900 bg-opacity-[35%] z-50'>
                <div className='relative bg-white h-full w-full max-w-sm p-8 rounded-xl overflow max-h-[400px] flex flex-col items-center justify-between'>
                    <button onClick={() => setIsSuccess(prevValue => !prevValue)} className='absolute top-4 right-6 text-red-400 hover:text-red-600 text-lg'><i className='fa fa-times'></i></button>
                    <div className='h-1/2'>
                        <img className='h-full' alt='' src={resetPasswordSuccess} />
                    </div>
                    <div className='w-full h-1/2 flex flex-col gap-5 items-center justify-end'>
                        <h2 className='text-cyan-500 font-semibold'>Congratulations!</h2>
                        <p>Your account is ready to use</p>
                        <Link to='/' className='rounded-3xl py-3 w-full text-white font-semibold flex items-center justify-center bg-cyan-500 hover:bg-cyan-600'>Go to Homepage</Link>
                    </div>
                </div>
            </div>
        }
        <div className='flex flex-col justify-between items-center h-full w-full max-w-lg p-3'>
            <div className='flex justify-start items-center gap-5 w-full text-gray-600'>
                <BackArrow link='/' classes=''/>
                <h1 className='text-2xl'>Create New Password</h1>
            </div>
            <div className='flex flex-col items-center w-full max-w-md'>
                <img alt='' src={verifiedBadge} />
            </div>
            <div className='w-full flex flex-col gap-5 pb-6'>
                <p>Create Your New Password</p>
                <div className='relative w-full'>
                    <label htmlFor='ppassword' className='sr-only'></label>
                    
                    <span className={`absolute top-0 left-0 h-full flex items-center px-5 ${isPasswordFocus? 'text-cyan-500': 'text-gray-600'}`}><i className='fa fa-lock'></i></span>
                    <input onChange={(e) => setPassword(e.target.value)} name='password' type={showPassword? 'text': 'password'} placeholder='Password' onFocus={() => setIsPasswordFocus(true)} onBlur={() => setIsPasswordFocus(false)}  className='text-base rounded-xl border w-full py-2.5 px-12 bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600'/>
                    <button onClick={() => setShowPassword(prevValue => !prevValue)} type='button' className={`absolute top-0 right-0 h-full flex items-center px-5  ${isPasswordFocus? 'text-cyan-500': 'text-gray-600'}`}>
                        {
                            showPassword?
                            <span><i className='fa fa-eye'></i></span>
                            :
                            <span><i className='fa fa-eye-slash'></i></span>
                        }
                    </button>
                </div>
                <div className='relative w-full'>
                    <label htmlFor='confirm-password' className='sr-only'></label>
                    <span className={`absolute top-0 left-0 h-full flex items-center px-5 ${isConfirmPassFocus? 'text-cyan-500': 'text-gray-600'}`}><i className='fa fa-lock'></i></span>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} name='confirm-password' type={showConfirmPass? 'text': 'password'} placeholder='Confirm Password' onFocus={() => setIsConfirmPassFocus(true)} onBlur={() => setIsConfirmPassFocus(false)}  className='text-base rounded-xl border w-full py-2.5 px-12 bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:bg-cyan-50 focus:outline-none ring-0 focus:ring-0 text-gray-600'/>
                    <button onClick={() => setShowConfirmPass(prevValue => !prevValue)} type='button' className={`absolute top-0 right-0 h-full flex items-center px-5  ${isConfirmPassFocus? 'text-cyan-500': 'text-gray-600'}`}>
                        {
                            showConfirmPass?
                            <span><i className='fa fa-eye'></i></span>
                            :
                            <span><i className='fa fa-eye-slash'></i></span>
                        }
                    </button>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <input type='checkbox' name='remember-me' className='rounded w-5 h-5 focus:ring-0 focus:outline-none'/>
                    <label>Remember me</label>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full max-w-md'>
                <Button
                content='Continue'
                className='rounded-3xl py-3 w-full text-white font-semibold flex items-center justify-center bg-cyan-500 hover:bg-cyan-600'
                />
            </div>
        </div>
    </div>
  )
}

export default CreatePassword