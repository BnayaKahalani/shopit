import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import { BsStarFill, BsInfoCircle } from "react-icons/bs"
import { ship1Img } from "@/public/assets/images"

const ProductDetails = () => {
  const router = useRouter()
  const [product, setProduct] = useState<any>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setProduct(router.query)
    setLoading(false)
  }, [])

  return (
    <div className='w-full bg-white'>
      <div className='max-w-contentContainer mx-auto flex items-center py-4'>
        <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
          <Image
            className='w-[80%] transform-origin-top-left curso-move duration-500'
            width={250}
            height={250}
            src={product.image}
            alt='productImg'
          />
        </div>
        <div className='w-1/3 h-full flex flex-col gap-2'>
          <p className='p-2 text-black text-sm font-semibold border border-gray-400 rounded-md'>
            +500 bought since yesterday
          </p>
          <div className='px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
              <div>
                <button className='px-2 py-[1px] text-black text-sm border-[1px] border-black rounded-sm'>
                  Best seller
                </button>
                <button className='px-2 py-[1px] text-black text-sm border-[1px] border-black rounded-sm'>
                  Rollback
                </button>
              </div>
              <IoMdHeartEmpty className='text-gray-600 text-2xl' />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm underline underline-offset-4'>{product.brand}</p>
              <p className='text-xl font-semibold text-black'>{product.title}</p>
              <p className='text-base font-semibold text-zinc-500'>{product.description}</p>
              <div>
                <div className='flex gap-1'>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <p>25</p>
                </div>
                <div className='flex items-end gap-2'>
                  <p className='font-semibold text-2xl text-green-600'>Now ${product.price}</p>
                  <p>
                    ${product.oldPrice}{" "}
                    <span>
                      <BsInfoCircle />
                    </span>
                  </p>
                </div>
              </div>
              <div className='text-sm text-black flex flex-col gap-1'>
                <p>
                  <span className='font-semibold'>$18/mo</span> <span className='font-bold'>withAffirm</span>{" "}
                  <span className='underline underline-offset-2'>Learn how</span>
                </p>
              </div>
              <div className='border-b-[1px] border-b-zinc-300 pb-4'>
                <button className='w-32 h-10 bg-primary text-white rounded-full hover:bg-primary_hover duration-300'>
                  Add to cart
                </button>
              </div>
              <div>
                <p className=''>How do you want your item?</p>
              </div>
              <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2'>
                <Image
                  className='w-10'
                  src={ship1Img}
                  alt='shippingImage'
                />
                <p>Shipping</p>
                <p>Tomorrow</p>
                <p>Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails