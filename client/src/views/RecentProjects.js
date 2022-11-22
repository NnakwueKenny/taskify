import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RecentProjects = () => {
  const [ isShowImage, setIsShowImage ] = useState(true);

  return (
    <div className='w-full max-w-2xl flex flex-col gap-4'>
    
      <div className='w-full p-4 flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
        <Link to='/' className='text-gray-500 text-xl'><span><i className='fa fa-arrow-left'></i></span></Link>
          <h1 className='text-xl font-semibold'>Recent Projects</h1>
        </div>
        <div className='flex gap-5 items-center text-2xl'>
          <button onClick={() => setIsShowImage(true)} className={`flex ${isShowImage? 'text-cyan-500': ''}`}><i className="fa-regular fa-image"></i></button>
          <button onClick={() => setIsShowImage(false)} className={`flex ${!isShowImage? 'text-cyan-500': ''}`}><i className="fa-regular fa-file-lines"></i></button>
        </div>
      </div>

      <div className='h-full overflow-y-auto flex flex-col items-center py-5 p-4 gap-6'>
        <div className={`shrink-0 ${isShowImage? 'h-80': 'h-48'} w-full max-w-md border rounded-xl overflow-hidden shadow-lg'`}>
          {
            isShowImage &&
            <div className={`relative ${isShowImage? 'h-2/5 ': 'h-full'} overflow-hidden`}>
                <div className='z-0 absolute'>
                    <img alt='' className='w-full h-full object-cover' src='https://images.pexels.com/photos/6985192/pexels-photo-6985192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                </div>
                <div className='absolute top-0 h-full w-full flex items-end justify-between p-4 bg-transparent z-10'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                        <img alt='' className='w-full h-full object-cover' src='https://images.pexels.com/photos/66877/butterfly-exotic-south-america-amazon-66877.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                    <div className="flex -space-x-4">
                        <img className="w-9 h-9 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="w-9 h-9 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="w-9 h-9 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <Link to='/' className="flex justify-center items-center w-9 h-9 text-xs font-medium text-white bg-gray-600 rounded-full border-2 border-white hover:bg-gray-600" href="#">+3</Link>
                    </div>
                </div>
            </div>
          }
          <div className={`relative ${isShowImage? 'h-3/5': 'h-full'}  p-3 pb-6 flex flex-col`}>
              <div className='flex flex-col gap-1 mb-auto'>
                  <div className='flex items-baseline justify-between'>
                      <span className='text-xl font-semibold'>Ribbons Mobile App Project </span>
                      <span className='w-5 h-5 text-sm flex justify-center items-center border rounded-full text-gray-400'><i className='fa fa-ellipsis'></i></span>
                  </div>
                  <div className='text-base'>
                      MERN Stack Project - <span>Nov 30, 2022</span>
                  </div>
              </div>
              <div className='flex flex-col gap-4'>
                  <div className='text-base flex justify-between items-end'>
                      <div className='h-8 w-20 bg-gradient-to-r from-orange-500 to-yellow-600 flex items-center justify-center rounded-xl text-white font-semibold'>60/90</div>
                      <span>9 days left</span>
                  </div>
                  <div className='w-full rounded bg-gray-200 h-1 overflow-hidden'>
                      <div className='w-[85%] bg-gradient-to-r from-orange-500 to-yellow-600 h-full'></div>
                  </div>
              </div>
          </div>
        </div>
        <div className={`shrink-0 ${isShowImage? 'h-80': 'h-48'} w-full max-w-md border rounded-xl overflow-hidden shadow-lg'`}>
          {
            isShowImage &&  
            <div className={`relative ${isShowImage? 'h-2/5 ': 'h-full'} overflow-hidden`}>
                <div className='z-0 absolute'>
                    <img alt='' className='w-full h-full object-cover' src='https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                </div>
                <div className='absolute top-0 h-full w-full flex items-end justify-between p-4 bg-transparent z-10'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                        <img alt='' className='w-full h-full object-cover' src='https://images.pexels.com/photos/1044989/pexels-photo-1044989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    </div>
                    <div className="flex -space-x-4">
                        <img className="w-9 h-9 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="w-9 h-9 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="w-9 h-9 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <Link to='/' className="flex justify-center items-center w-9 h-9 text-xs font-medium text-white bg-gray-600 rounded-full border-2 border-white hover:bg-gray-600" href="#">+3</Link>
                    </div>
                </div>
            </div>
          }
            <div className={`relative ${isShowImage? 'h-3/5': 'h-full'}  p-3 pb-6 flex flex-col`}>
                <div className='flex flex-col gap-1 mb-auto'>
                    <div className='flex items-baseline justify-between'>
                        <span className='text-xl font-semibold'>Ribbons Mobile App Project </span>
                        <span className='w-5 h-5 text-sm flex justify-center items-center border rounded-full text-gray-400'><i className='fa fa-ellipsis'></i></span>
                    </div>
                    <div className='text-base'>
                        MERN Stack Project - <span>Nov 30, 2022</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='text-base flex justify-between items-end'>
                        <div className='h-8 w-20 bg-gradient-to-r from-stone-500 to-teal-600 flex items-center justify-center rounded-xl text-white font-semibold'>60/90</div>
                        <span>9 days left</span>
                    </div>
                    <div className='w-full rounded bg-gray-200 h-1 overflow-hidden'>
                        <div className='w-[85%] bg-gradient-to-r from-stone-500 to-teal-600 h-full'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects