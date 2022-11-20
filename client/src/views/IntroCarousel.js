import React, { useState } from 'react';
import calendar from '../images/icons/calendar.png';
import chat from '../images/icons/chat.png';
import pie from '../images/icons/pie.png';

const IntroCarousel = () => {
  const [ counter, setCounter] = useState(0);
  const carouselValue = [
    {
      img: calendar,
      header: 'Organize Your Tasks & Projects Easily',
      desc: 'Lorem ipsum dolor sit manet vobiscum et in nomine domine et cum spiritu santum, in aertenum. Dominus vobiscum!'
    },
    {
      img: chat,
      header: 'Always Connect with Team Anytime Anywhere',
      desc: 'Lorem ipsum dolor sit manet vobiscum et in nomine domine et cum spiritu santum, in aertenum. Et cum spiritu tuo!'
    },
    {
      img: pie,
      header: 'Everything You Can Do in One App',
      desc: 'Lorem ipsum dolor sit manet vobiscum et in nomine domine et cum spiritu santum, in aertenum.'
    },
  ]
  return (
    <div className='flex flex-col h-full px-2'>
      <div className='h-1/2 w-full flex justify-center items-center py-6'>
        {/*<span className='text-3xl'><i className='fa-solid fa-calender'></i></span>*/}
        <div className='flex justify-center items-center h-full'>
        {
          carouselValue.filter((item, index) => index === counter).map((item, index) => <img className='w-64 h-64' alt='' src={item.img} />)
        }
        </div>
      </div>
      <div className='h-1/2 w-full text-center flex flex-col justify-between pb-6'>
      {
        carouselValue.filter((item, index) => index === counter).map((item, index) => {
          return (
            <>
              <h1 className='text-2xl text-gray-700 font-bold text-center'>{item.header}</h1>
              <p className='text-gray-700'>{item.desc}</p>
            </>
          )
        })
      }
        <div className='flex gap-2 justify-center'>
          {
            carouselValue.map((value, index) => {
              return (
                <span className={`flex h-2 w-2 rounded-full ${index === counter? 'bg-cyan-500': 'bg-gray-200'}`}></span>
              )
            })
          }
        </div>
        <div className='flex flex-col gap-3'>
          <button onClick={() => setCounter(prevValue => prevValue < 2? prevValue + 1: 0)} className='bg-cyan-500 text-white font-semibold py-3 rounded-xl flex justify-center'>Next</button>
          <button className='bg-gray-200 text-cyan-500 font-semibold py-3 rounded-xl flex justify-center'>Skip</button>
        </div>
      </div>
    </div>
  )
}

export default IntroCarousel;