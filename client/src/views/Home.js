import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [ doneTask, setDoneTask ] = useState(false);
    
  return (
    <div className='flex flex-col items-center h-full w-full max-w-lg'>
        <div className='w-full flex flex-col pb-5 p-4'>
            <div className='w-full flex justify-between items-center pb-6'>
                <div className='flex items-center gap-4'>
                    <span className='block text-2xl font-semibold'>T</span>
                    <h1 className='text-xl font-semibold'>Taskify</h1>
                </div>
                
                <Link to='/notifications'>
                    <span className='text-cyan-500 text-xl'><i className='fa fa-bell'></i></span>
                </Link>
            </div>
            <Link to='/search' className='w-full flex items-center rounded-xl bg-gray-300 bg-opacity-25 text-gray-500 p-3'>
                <span className='h-full w-10'><i className="fa fa-magnifying-glass"></i></span>
                <div className='w-full text-sm'>Search</div>
                <span className='h-full w-6 text-cyan-500'><i className="fa fa-sliders"></i></span>
            </Link>
        </div>
        <div className='h-full w-full overflow-y-auto py-3 pt-3'>
        
            {/* Recent Projects*/}
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center text-sm font-semibold px-3'>
                    <span>Recent Projects</span>
                    <Link to='/recent-projects' className='text-cyan-500'>See All</Link>
                </div>
                <div className='flex gap-4 overflow-x-auto px-4 pb-3'>
                    <div className='shrink-0 h-80 w-full max-w-xs border rounded-xl overflow-hidden shadow-lg'>
                        <div className='relative h-2/5 overflow-hidden'>
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
                        <div className='h-3/5 p-3 pb-6 flex flex-col'>
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
                    <div className='shrink-0 h-80 w-full max-w-xs border rounded-xl overflow-hidden shadow-lg'>
                        <div className='relative h-2/5 overflow-hidden'>
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
                        <div className='h-3/5 p-3 pb-6 flex flex-col'>
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

            {/* Today's Tasks*/}
            <div className='flex flex-col gap-4 py-5'>
                <div className='flex justify-between items-center text-sm font-semibold px-3'>
                    <span>Today's Tasks</span>
                    <Link to='/today-task' className='text-cyan-500'>See All</Link>
                </div>
                <div className='flex flex-col gap-5 px-4'>
                    <div className='rounded-xl border p-5 flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                            <span className='flex text-sm'>Kickoff Meeting Project</span>
                        </div>
                        <div className=''>
                            <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border rounded overflow-hidden'>
                                {
                                    doneTask?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-blue-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                                }
                            </button>
                        </div>
                    </div>
                    <div className='rounded-xl border p-5 flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                            <span className='flex text-sm'>Kickoff Meeting Project</span>
                        </div>
                        <div className=''>
                            <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border rounded overflow-hidden'>
                                {
                                    doneTask?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-blue-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                                }
                            </button>
                        </div>
                    </div>
                    <div className='rounded-xl border p-5 flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                            <span className='flex text-sm'>Kickoff Meeting Project</span>
                        </div>
                        <div className=''>
                            <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border rounded overflow-hidden'>
                                {
                                    doneTask?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-blue-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer className='w-full flex justify-between gap-3 py-3 bg-transparent px-2'>
            <button className='flex flex-col items-center gap-[1px] text-cyan-500 hover:text-cyan-600 p-2'>
                <span className='flex'><i className='fa fa-home'></i></span>
                <span className='text-xs'>Home</span>
            </button>
            <button className='flex flex-col items-center gap-[1px] text-gray-300 hover:text-cyan-500 p-2'>
                <span className='flex'><i className="fa fa-bars-progress"></i></span>
                <span className='text-xs'>Project</span>
            </button>
            <button className='w-full max-w-[40px] h-[40px] rounded-full gap-[1px] text-white bg-cyan-500 flex flex-col items-center justify-center p-2'>
                <span className='flex text-sm'><i className='fa fa-plus'></i></span>
            </button>
            <button className='flex flex-col items-center gap-[1px] text-gray-300 hover:text-cyan-500 p-2'>
                <span className='flex'><i className='fa fa-message'></i></span>
                <span className='text-xs'>Inbox</span>
            </button>
            <button className='flex flex-col items-center gap-[2px] text-gray-300 hover:text-cyan-500 p-2'>
                <span className='flex'><i className='fa fa-user'></i></span>
                <span className='text-xs'>Profile</span>
            </button>
        </footer>
    </div>
  )
}

export default Home;