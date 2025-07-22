import React from 'react'
import AboutImg from '../../assets/about-image.jpg'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20
    my-4 md:gap-20 gap-12 px-5 lg:px-10'>
        

        <div className='text-start sm:w-1/2'>
            <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>
                Vegan foodie who loves to experiment with recipes</h2>
            <p className='text-xl text-[#5c5c5c] mt-4'>Welcome to Veggify, your source for delicious and easy vegetarian recipes! We offer a variety of creative dishes to inspire your plant-based cooking journey.
                <br /><br /> Whether you're a lifelong vegetarian or new to the lifestyle, Veggify has something for everyone. Enjoy exploring our tasty recipes!
            </p>
            <div className='lg: mt-0 lg: flex-shrink-0'>
                <div className='mt-12 inline-flex'>
                    <Link to="/recipes">
                    <button className='py-4 px-8 bg-btnColor text-white hover:text-white
                    w-full transition ease-in duration-200 text-center text-base font-semibold border
                    border-[#9c702a] focus: outline-none rounded-lg'>View Recipe</button>
                    </Link>

                </div>
            </div>
        </div>
        <div>
            <img src={AboutImg} alt="Feature Image" className='rounded-md'/>
        </div>
    </div>
  )
}

export default AboutSection
