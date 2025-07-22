import React from 'react'

const NewLetter = () => {
  return (
    <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10'>
      <h3 className='text-secondary font-semibold text-center text-4xl'>
        Sign up for my weekly recipes</h3>
        <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>
        Weekly emails with new recipes, cooking tips, and product recommendations to enhance your home cooking.<br/>You'll be set up in minutes.
        </p>
        <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4
        mb-20'>
          <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none
          placeholder:text-[#1b2629]' type="text" placeholder='Name' />
          <input className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none
          placeholder:text-[#1b2629]' type="text" placeholder='Email Address' />

          <button type='button' className='mt-2 md:mt-0 md:m1-2 py-4 px-8 hover:border-btnColor hover:text-secondary
            hover:bg-[#f9f7f3] bg-btnColor text-white shadow-lg outline-none rounded hover:border'>Get Started
          </button>
        </div>
    </div>
  )
}

export default NewLetter