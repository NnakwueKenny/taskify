import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Notifications = () => {
    const [ doneTask, setDoneTask ] = useState(false);
  return (
    <div className='w-full max-w-2xl flex flex-col gap-4'>
        <div className='w-full p-4 flex justify-between items-center shadow'>
            <div className='flex gap-4 items-center'>
                <Link to='/' className='text-gray-500 text-xl'><span><i className='fa fa-arrow-left'></i></span></Link>
                <h1 className='text-xl font-semibold'>Today's Tasks</h1>
            </div>
            <div className='flex gap-5 items-center text-2xl'>
                <button className='w-6 h-6 text-sm flex justify-center items-center border rounded-full text-gray-400'><i className='fa fa-ellipsis'></i></button>
            </div>
        </div>

        <div className='h-full w-full overflow-y-auto flex flex-col items-center pb-5 p-2'>
            
            {/* Today */}
            <h2 className='w-full px-4 pb-2 font-semibold'>Today</h2>
            <div className='w-full flex flex-col px-4 divide-y'>
                <div className='py-3 flex items-center gap-3'>
                    <div className='shrink-0 flex h-12 w-12 rounded-full overflow-hidden'>
                        <img alt='' className='h-full w-full' src='https://images.pexels.com/photos/2466668/pexels-photo-2466668.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    </div>
                    <div className='flex flex-col w-full text-sm'>
                        <span className='font-semibold text-md'>Nonso Nnakwue</span>
                        <span className='font-light text-gray-300'>Leave a comment on WhatsApp</span>
                    </div>
                    <button className='shrink-0 flex h-7 w-16 items-center justify-center rounded-xl text-white bg-cyan-500'>
                        View
                    </button>
                </div>
                <div className='py-3 flex items-center gap-3'>
                    <div className='shrink-0 flex h-12 w-12 rounded-full overflow-hidden'>
                        <img alt='' className='h-full w-full' src='https://images.pexels.com/photos/2466668/pexels-photo-2466668.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    </div>
                    <div className='flex flex-col w-full text-sm'>
                        <span className='font-semibold text-md'>Salma Gambo</span>
                        <span className='font-light text-gray-300'>Adding a task to the 3D design</span>
                    </div>
                    <button className='shrink-0 flex h-7 w-16 items-center justify-center rounded-xl text-white bg-cyan-500'>
                        View
                    </button>
                </div>
            </div>

            {/* Yesterday */}
            <h2 className='w-full px-4 py-2 font-semibold'>Yesterday</h2>
            <div className='w-full flex flex-col px-4 divide-y'>
                <div className='py-3 flex items-center gap-3'>
                    <div className='shrink-0 flex h-12 w-12 rounded-full overflow-hidden'>
                        <img alt='' className='h-full w-full' src='https://images.pexels.com/photos/2466668/pexels-photo-2466668.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    </div>
                    <div className='flex flex-col w-full text-sm'>
                        <span className='font-semibold text-md'>Muhammad Abubakar</span>
                        <span className='font-light text-gray-300'>Adding a task to the NFT Project</span>
                    </div>
                    <button className='shrink-0 flex h-7 w-16 items-center justify-center rounded-xl text-white bg-cyan-500'>
                        View
                    </button>
                </div>
                <div className='py-3 flex items-center gap-3'>
                    <div className='shrink-0 flex h-12 w-12 rounded-full overflow-hidden'>
                        <img alt='' className='h-full w-full' src='https://images.pexels.com/photos/2466668/pexels-photo-2466668.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    </div>
                    <div className='flex flex-col w-full text-sm'>
                        <span className='font-semibold text-md'>Faruq Hassan</span>
                        <span className='font-light text-gray-300'>Adding a task to the 3D design</span>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='text-xl'>
                            <span><i className='fa-regular fa-paper-plane'></i></span>
                        </button>
                        <button className='w-5 h-5 text-sm flex justify-center items-center border rounded-full text-gray-400'>
                            <i className='fa fa-ellipsis'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notifications;