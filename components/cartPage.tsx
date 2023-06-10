import React from "react"
import { useSelector } from "react-redux"
import { emptyCart, phoneImg, ship1Img, ship2Img, ship3Img, warningImg } from "../public/assets/images"
import { TbReload } from "react-icons/tb"
import { HiMinusSmall } from "react-icons/hi2"
import { MdOutlineAdd } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import Image from "next/image"

const CartPage = () => {
  const productData = useSelector((state: any) => state.shopper.productData)
  return (
    <div className='w-full py-20'>
      <div className='w-full flex gap-10'>
        <div className='w-2/3 flex flex-col gap-5'>
          <h1 className='text-2xl font-bold text-black'>
            Cart <span className='text-lightText font-normal'>({productData.length} items)</span>
          </h1>
          <div>
            <div className='text-xl font-bold flex items-center gap-2 mb-2'>
              <Image
                className='w-10'
                src={phoneImg}
                alt='phoneImg'
              />
              <p>Pickup and delivery options</p>
            </div>
            <div className='w-full grid grid-cols-3 gap-4 text-xs'>
              <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
                <Image
                  className='w-10'
                  src={ship1Img}
                  alt='shippingImg'
                />
                <p className='font-bold'>Shipping</p>
                <p>All items available</p>
              </div>
              <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
                <Image
                  className='w-10'
                  src={ship2Img}
                  alt='shippingImg'
                />
                <p className='font-bold'>Pickup</p>
                <p>All items available</p>
              </div>
              <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
                <Image
                  className='w-10'
                  src={ship3Img}
                  alt='shippingImg'
                />
                <p className='font-bold'>Delivery</p>
                <p>All items available</p>
              </div>
            </div>
            <div className='font-semibold text-sm text-zinc-500'>
              <p>
                {" "}
                Sold and shipped by <span className='text-black font-semibold'>Shopit.com</span>
              </p>
              <div className='flex gap-2'>
                <button className='px-2 py-[1px] text-blue-500 text-sm border-[1px] border-blue-500 rounded-sm'>
                  Best seller
                </button>
                <button className='px-2 py-[1px] text-red-500 text-sm border-[1px] border-red-500 rounded-sm '>
                  Rollback
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4'></div>
      </div>
    </div>
  )
}

export default CartPage
