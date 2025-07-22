import React from 'react'

const Subscription = () => {
  return (
    <div className='bg-white py-16 rounded-t-md'>
        <div className='max-w-screen-xl mx-auto px-6 lg:px-8 mb-20'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
                <div className='md:w-1/2'>
                    <h3 className='text-3xl font-bold tracking-tight text-secondary sm:text-4xl'>
                        Subscribe to our newsletter</h3>
                    <p className='mt-4 text-lg leading-8'>Sign up for our weekly newsletter to receive updates on new recipes, cooking tips, and product recommendations!</p>
                </div>
                <div className='sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4'>
                    <label htmlFor="email-address" className='sr-only'>Email Address</label>
                    <input className='flex-auto rounded-md border-0 bg-primary px-3.5 py-4 text-white shadow-sm sm:text-sm
                    sm:leading-6 focus:outline-btnColor' type="email" placeholder='Email Address' name='email' id='email address'
                    autoComplete='email' required />

                    <button type='button' className='flex-none rounded-md py-4 px-8 hover:border-btnColor hover:text-btnColor
                        hover:bg-white bg-btnColor text-white shadow-sm outline-none hover:border'>Subscribe
                    </button>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Subscription