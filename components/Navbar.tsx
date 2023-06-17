import logo from "../public/assets/images/logo.png"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import NavbarBottom from "./NavbarBottom"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const productData = useSelector((state: any) => state.shopper.productData)
  const [totalAmount, setTotalAmount] = useState("")

  useEffect(() => {
    let price = 0
    productData.map((item: any) => {
      price += item.price * item.quantity
      return price
    })
    setTotalAmount(price.toFixed(2))
  }, [productData])

  return (
    <div className='w-full bg-primary text-white sticky top-0 z-10'>
      <div className='w-full h-full border-b-[1px] border-b-white'>
        <div className='max-w-container mx-auto h-20 px-4 flex items-center gap-2'>
          <Link href='/'>
            <div className='navbar'>
              <Image
                src={logo}
                alt='logo'
              />
            </div>
          </Link>
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
          <div className='navbarHover'>
            <AiOutlineHeart />
            <div>
              <p className='text-xs'>Recorder</p>
              <h2 className='text-base font-semibold -mt-1'>My Items</h2>
            </div>
          </div>
          <div
            onClick={() => signIn()}
            className='navbarHover'
          >
            <AiOutlineUser className='text-lg' />
            <div>
              <p className='text-xs'>Sign in</p>
              <h2 className='text-base font-semibold -mt-1'>Account</h2>
            </div>
          </div>
          <Link href='/cart'>
            <div className='flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-primary_hover duration-300 relative'>
              <BsCart2 className='text-2xl' />
              <p className='text-[10px]'>${totalAmount}</p>
              <span className='absolute w-4 h-4 bg-red-500 text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs'>
                {productData.length > 0 ? productData.length : 0}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <NavbarBottom />
      </div>
    </div>
  )
}

export default Navbar
