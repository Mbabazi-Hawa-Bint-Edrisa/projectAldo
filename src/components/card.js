import React from 'react'
import TestCard from './testCard'
import Trips from '../data/trips'
import Slider from "react-slick";

export default function Card() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    const settingsMobile = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <div className='px-24 mt-16 hidden md:block'>
            <div className='my-16'>
                <div className='text-3xl font-bold text-teal-900 tracking-wide'>Popular Destinations in Uganda</div>
                <span className='font-light text-teal-800'>Browse through our Aldo Premium Experience</span>
            </div>
            <div className="slider-container">
                <Slider {...settings} className='flex gap-2'>
                        {Trips.map((trip)=>(
                            <TestCard
                            key={trip.id}
                            imageUrl={trip.imageUrl}
                            location={trip.location}
                            title={trip.title}
                            days={trip.days}
                            review={trip.review}
                            price={trip.price}
        
                        />))}
                </Slider>
            </div>
        </div>
        <div className='px-4 mt-16 md:hidden'>
            <div className='px-2 my-16'>
                <div className='text-xl font-bold text-teal-900 tracking-wide'>Popular Destinations in Uganda</div>
                <span className='font-light text-teal-800 text-sm'>Browse through our Aldo Premium Experience</span>
            </div>
            <div className="slider-container">
                <Slider {...settingsMobile} className='flex gap-2'>
                        {Trips.map((trip)=>(
                            <TestCard
                            key={trip.id}
                            imageUrl={trip.imageUrl}
                            location={trip.location}
                            title={trip.title}
                            days={trip.days}
                            review={trip.review}
                            price={trip.price}
        
                        />))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

