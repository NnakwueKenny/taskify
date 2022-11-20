import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center h-full w-full max-w-lg p-3 gap-4'>
        <div className='w-full flex flex-col gap-6'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <span className='block text-2xl font-semibold'>T</span>
                    <h1 className='text-xl font-semibold'>Taskify</h1>
                </div>
                <button>
                    <span className='text-cyan-500 text-xl'><i className='fa fa-bell'></i></span>
                </button>
            </div>
            <div className='flex items-center rounded-xl bg-gray-100 text-gray-500 p-3'>
                <span className='h-full w-10'><i className='fa fa-search'></i></span>
                <div className='w-full text-sm'>Search</div>
                <span className='h-full w-6 text-cyan-500'><i className='fa fa-filter'></i></span>
            </div>
        </div>
        <div className='mb-auto h-full w-full overflow-y-auto py-1'>
            <div>ed</div>
        </div>
        <div className='w-full flex gap-3'>
            <button className='w-full flex flex-col items-center text-cyan-500 hover:text-cyan-600'>
                <span className='flex'><i className='fa fa-home'></i></span>
                <span className='text-xs'>Home</span>
            </button>
            <button className='w-full flex flex-col items-center text-gray-300 hover:text-cyan-500'>
                <span className='flex'><i className='fa fa-paper'></i></span>
                <span className='text-xs'>Project</span>
            </button>
            <button className='w-full max-w-[35px] h-[35px] rounded-full text-white bg-cyan-500 flex flex-col items-center justify-center'>
                <span className='flex text-sm'><i className='fa fa-plus'></i></span>
            </button>
            <button className='w-full flex flex-col items-center text-gray-300 hover:text-cyan-500'>
                <span className='flex'><i className='fa fa-message'></i></span>
                <span className='text-xs'>Inbox</span>
            </button>
            <button className='w-full flex flex-col items-center text-gray-300 hover:text-cyan-500'>
                <span className='flex'><i className='fa fa-user'></i></span>
                <span className='text-xs'>Profile</span>
            </button>
        </div>
    </div>
  )
}

export default Home