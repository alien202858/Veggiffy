import React from 'react'
import { HiMiniBars4 } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const MobileNav = ({menuItems,Logo,onClose,hideLeft,onOpen}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
            <img src={Logo} alt="logo" />
        </a>
        <button onClick={onOpen} className='border border-primary rounded'>
        <HiMiniBars4 className='w-7 h-7'/>
        </button>

        <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-centre`}>
            <button onClick={onClose} className='absolute right-8 top-32'>
                <RiCloseCircleLine className='w-7 h-7'/>
            </button>

            <div className=''>
                <ul className='flex flex-col gap-5 mt-80'>
                    {
                        menuItems?.map((menu, index) => (
                            <li key={index}>
                                <Link to={menu} className='font-medium capitalize text-secondary text-2xl'>{menu}</Link>
                            </li>
                        ))
                    }
                </ul>

                {/* login and sign up */}

                <ul className='flex items-center gap-4 font-medium mt-10'>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border'>Log In</button>
                    </li>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNav