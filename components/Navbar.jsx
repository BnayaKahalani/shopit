import logo from "../public/assets/images/logo.png"
import Image from "next/image"
import React from "react"
import { IoSearchOutline } from "react-icons/io5"

const Navbar = () => {
  return (
    <div className='w-full bg-amber-300 text-white'>
      <div className='max-w-container mx-auto h-20 px-4 flex items-center gap-2'>
        <div className='navbarHover'>
          <Image
            src={logo}
            alt='logo'
          />
        </div>
        <div className='navbarHover'>
          <div className='w-4 grid grid-cols-2 gap-[2px]'>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
          </div>
          <p className='text-base font-semibold'>Departments</p>
        </div>
        <div className='navbarHover'>
          <div className='w-4 grid grid-cols-2 gap-[2px]'>
            <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
          </div>
          <p className='text-base font-semibold'>Services</p>
        </div>
        <div className='h-10 flex flex-1 relative'>
          <input
            className='h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration 200'
            type='text'
            placeholder='Search at Shopit'
          />
          <span className='absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-purple-500 txt-black text-xl'>
            <IoSearchOutline />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
