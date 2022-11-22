import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TodayTask = () => {
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

        <div className='h-full w-full overflow-y-auto flex flex-col items-center py-5 p-2 gap-6'>
            <div className='w-full flex flex-col gap-5 px-4'>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
                <div className='rounded-xl border hover:border-cyan-500 p-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <span className='flex text-lg font-semibold'>Kickoff Meeting Project</span>
                        <span className='flex text-sm'>Kickoff Meeting Project</span>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => setDoneTask(prevValue => !prevValue)} className='flex w-6 h-6 p-[1px] border border-cyan-500 rounded overflow-hidden'>
                            {
                                doneTask ?
                                    <span className='h-full w-full rounded flex items-center justify-center text-white bg-cyan-500'><i className='fa fa-check'></i></span>
                                    :
                                    ''
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodayTask