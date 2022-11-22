import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div className='flex flex-col items-center h-full w-full max-w-lg gap-2'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex items-center gap-4 px-4 py-4 pb-6'>
                    <div className='w-full flex items-center rounded-xl overflow-hidden bg-gray-300 bg-opacity-25 text-gray-500'>
                        <button className='w-10 h-10 flex shrink-0 justify-center items-center'><i className="fa fa-magnifying-glass"></i></button>
                        <input placeholder='Search' className='w-full h-full py-3 px-1 text-sm text-gray-400 dark:text-gray-200 bg-transparent border-0 foxus:ring-0 focus:outline-none' />
                        <span className='w-10 h-10 flex shrink-0 justify-center items-center text-cyan-500'><i className="fa fa-sliders"></i></span>
                    </div>
                    <Link to='/' className='text-2xl text-red-500'>
                        <span><i className='fa fa-times'></i></span>
                    </Link>
                </div>
                <div className='w-full overflow-x-auto flex items-center gap-3 px-5 pb-6'>
                    <button className='shrink-0 rounded-xl border border-cyan-500 hover:shadow hover:shadow-cyan-300 bg-cyan-500 text-white h-7 flex items-center px-4 text-xs'>All Tasks/Projects</button>
                    <button className='shrink-0 rounded-xl border border-cyan-500 hover:shadow hover:shadow-cyan-300 bg-transparent text-cyan-500 h-7 flex items-center px-4 text-xs'>Project</button>
                    <button className='shrink-0 rounded-xl border border-cyan-500 hover:shadow hover:shadow-cyan-300 bg-transparent text-cyan-500 h-7 flex items-center px-4 text-xs'>Meet-Up</button>
                    <button className='shrink-0 rounded-xl border border-cyan-500 hover:shadow hover:shadow-cyan-300 bg-transparent text-cyan-500 h-7 flex items-center px-4 text-xs'>Task</button>
                </div>
                <div className='px-5'><div className='border-b'></div></div>
            </div>

            <div className='w-full h-full overflow-y-auto flex flex-col gap-4 px-5 py-3'>
                <h3 className='w-full font-semibold text-md'>Recent Tasks</h3>
                <div className='w-full flex justify-between items-center font-light text-base'>
                    <span className='flex'>Ribbons Project</span>
                    <button className='flex items-center justify-center rounded h-4 w-4 border text-xs'><span className='flex'><i className='fa fa-times'></i></span></button>
                </div>
                <div className='w-full flex justify-between items-center font-light text-base'>
                    <span className='flex'>Meet with client.</span>
                    <button className='flex items-center justify-center rounded h-4 w-4 border text-xs'><span className='flex'><i className='fa fa-times'></i></span></button>
                </div>
                <div className='w-full flex justify-between items-center font-light text-base'>
                    <span className='flex'>Kanban Project</span>
                    <button className='flex items-center justify-center rounded h-4 w-4 border text-xs'><span className='flex'><i className='fa fa-times'></i></span></button>
                </div>
                <div className='w-full flex justify-between items-center font-light text-base'>
                    <span className='flex'>Kent Technologies Project</span>
                    <button className='flex items-center justify-center rounded h-4 w-4 border text-xs'><span className='flex'><i className='fa fa-times'></i></span></button>
                </div>
            </div>
        </div>
    )
}

export default Search