import React from 'react'
import Button from '../components/Buttons/Button'
import BackArrow from '../components/navigations/BackArrow'

const ForgotPasswordOTP = () => {
  return (
    <div className='flex flex-col justify-between items-center h-full w-full max-w-lg p-5'>
        <div className='flex justify-start items-center gap-5 w-full text-gray-600'>
            <BackArrow link='/' classes=''/>
            <h1 className='text-3xl'>Forgot Password</h1>
        </div>
        <div className='flex flex-col items-center w-full max-w-md gap-12'>
          <p>Code has been sent to +23481****904</p>
          <div className='flex w-full justify-center gap-4'>
            <div className='flex items-center justify-center h-16 w-full max-w-[80px] rounded-xl bg-gray-100 text-3xl font-semibold'>9</div>
            <div className='flex items-center justify-center h-16 w-full max-w-[80px] rounded-xl bg-gray-100 text-3xl font-semibold'>9</div>
            <div className='flex items-center justify-center h-16 w-full max-w-[80px] rounded-xl bg-gray-100 text-3xl font-semibold'>9</div>
            <div className='flex items-center justify-center h-16 w-full max-w-[80px] rounded-xl bg-gray-100 text-3xl font-semibold'>9</div>
          </div>
          <p>Resend Code in <span className='text-cyan-500 font-semibold'>52</span> s</p>
        </div>
        <div className='flex flex-col justify-center w-full max-w-md'>
          <Button
            content='Continue'
            className='rounded-3xl py-3 w-full text-white font-semibold flex items-center justify-center bg-cyan-500 hover:bg-cyan-600'
          />
        </div>
    </div>
  )
}

export default ForgotPasswordOTP