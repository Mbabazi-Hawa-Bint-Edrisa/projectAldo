import React from 'react'
import Trips from '../data/trips'


export default function TestCard({id, days, title, location, review, price, imageUrl}) {
  return (
        <div className='flex flex-col min-w-[16rem] rounded-md h-96 px-4'>
            <div className='img h-[60%] relative'>
                <a href="/trips"><img src={imageUrl} className='rounded-md w-full h-full object-cover'></img></a>
            </div>
            <div className='flex flex-col gap-1 h-[40%] text-sm py-4'>
                <div className='text-slate-600'>{days}</div>
                <a href="/trips">
                    <div className='text-bold text-lg text-slate-900'>{title}</div>
                </a>
                <div className='text-slate-600'>{location}</div>
                <div className='text-slate-600'>{review}</div>
                <div className='text-slate-600'><span className='text-slate-900 text-xl'>${price}</span>/person</div>
            </div>
        </div>

  )
}
