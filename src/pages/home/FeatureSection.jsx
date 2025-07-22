import React from 'react'
import FeaturedImg from '../../assets/featured.jpg'
import { Link } from 'react-router-dom'


const FeatureSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20
    my-4 md:gap-20 gap-12 px-5 lg:px-10'>
        <div className='relative'>
            <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md
            upercase tracking-wider'>Featured Recipe</div>
            <img src={FeaturedImg} alt="Feature Image" className='rounded-md'/>
        </div>

        <div className='text-start sm:w-1/2'>
            <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>
                Masala Dosa</h2>
            <p className='text-xl text-[#5c5c5c] mt-4'>Masala Dosa is a popular South Indian dish featuring a crispy, thin crepe made from fermented rice and lentil batter. It is traditionally filled with a spiced potato mixture and served with coconut chutney and sambar. Known for its savory flavor and satisfying crunch, it's a staple in South Indian cuisine.
            </p>
            <div className='lg: mt-0 lg: flex-shrink-0'>
                <div className='mt-12 inline-flex'>
                    <Link to="/items/66901897a06cd49288b8fe9e">    
                    <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white
                    w-full transition ease-in duration-200 text-center text-base font-semibold border
                    border-[#9c702a] focus: outline-none rounded-lg'>View Recipe</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureSection
