import React from "react"
import { useSelector } from "react-redux"
import { emptyCart, phoneImg, ship1Img, ship2Img, ship3Img, warningImg } from "../public/assets/images"
import { TbReload } from "react-icons/tb"
import { HiMinusSmall } from "react-icons/hi2"
import { MdOutlineAdd } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import Image from "next/image"
import { StoreProduct } from "@/type"

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
              <div>
                {productData.map((item: StoreProduct) => (
                  <div
                    key={item._id}
                    className='flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4'
                  >
                    <div className='w-3/4 flex items-center gap-2'>
                      <Image
                        className='w-32'
                        width={500}
                        height={500}
                        src={item.image}
                        alt='productImg'
                      />
                      <div>
                        <h2 className='text-base text-zinc-900'>{item.title}</h2>
                        <p className='text-sm text-zinc-500'>{item.description}</p>
                        <p className='text-sm text-zinc-500'>price: ${item.price}</p>
                        <p className='text-sm text-zinc-500 flex items-center gap-1'>
                          <span className='bg-blue-400 rounded-full text-white text-xs w-4'>
                            <TbReload className='rotate-180' />
                          </span>{" "}
                          Free 30-day returns
                        </p>
                        <div className='mt-2 flex items-center gap-6'>
                          <button className='text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-zinc-400 duration-300'>
                            Remove
                          </button>
                          <div className='w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3'>
                            <button className='text-base w-5 h-5 text-zinc-600 hover:bg-zinc-400 hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200'>
                              <HiMinusSmall />
                            </button>
                            <span>{item.quantity}</span>
                            <button className='text-base w-5 h-5 text-zinc-600 hover:bg-zinc-400 hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200'>
                              <MdOutlineAdd />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
