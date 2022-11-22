import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div className='flex flex-col items-center h-full w-full max-w-lg'>
        <div className='w-full flex flex-col'>
            <div className='w-full flex items-center gap-4 px-3 py-4'>
                <div className='w-full flex items-center rounded-xl overflow-hidden bg-gray-300 bg-opacity-25 text-gray-500'>
                    <button className='w-10 h-10 flex shrink-0 justify-center items-center'><i className="fa fa-magnifying-glass"></i></button>
                    <input placeholder='Search' className='w-full h-full py-3 px-1 text-sm text-gray-300 bg-transparent border-0 foxus:ring-0 focus:outline-none' />
                    <span className='w-10 h-10 flex shrink-0 justify-center items-center text-cyan-500'><i className="fa fa-sliders"></i></span>
                </div>
                <Link to='/' className='text-2xl text-red-500'>
                    <span><i className='fa fa-times'></i></span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Search