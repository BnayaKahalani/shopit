import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import { BsInfoCircle } from "react-icons/bs"
import { ship1Img, ship2Img, ship3Img } from "@/public/assets/images"
import { addToCart } from "@/redux/shopperSlice"
import { useDispatch } from "react-redux"
import toast, { Toaster } from "react-hot-toast"
import useRandom from "@/hooks/useRandom"
import useRate from "@/hooks/useRate"
import useCommas from "@/hooks/useCommas"

const ProductDetails = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [product, setProduct] = useState<any>({})

  useEffect(() => {
    setProduct(router.query)
  }, [])

  const _id = Number(product._id)

  return (
    <div className='w-full bg-white'>
      <div className='mx-auto flex max-w-contentContainer items-center py-4'>
        <div className='relative flex h-full w-2/3 items-center justify-center overflow-hidden'>
          {product.image ? (
            <Image
              className='transform-origin-top-left curso-move w-[80%] duration-500'
              width={1000}
              height={1000}
              src={product.image}
              alt='productImg'
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className='flex h-full w-1/3 flex-col gap-2'>
          <p className='rounded-md border border-gray-400 p-2 text-sm font-semibold text-black'>
            <span>{useCommas(useRandom(500, 1580))}</span> bought since yesterday
          </p>
          <div className='flex flex-col gap-6 rounded-md border border-gray-400 px-2 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <p className='rounded-sm border-[1px] border-blue-500 px-2 py-[1px] text-sm text-blue-500'>
                  Best seller
                </p>
                <p className='rounded-sm border-[1px] border-red-500 px-2 py-[1px] text-sm text-red-500 '>Rollback</p>
              </div>
              <IoMdHeartEmpty className='text-2xl text-gray-600' />
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-sm underline underline-offset-4'>{product.brand}</p>
              <p className='text-xl font-semibold text-black'>{product.title}</p>
              <p className='text-base font-semibold text-zinc-500'>{product.description}</p>
              <div>
                <div className='flex items-center gap-1'>
                  {useRate(product)}
                  <p>{useRandom(25, 100)}</p>
                </div>
                <div className='flex items-end gap-2'>
                  <p className='text-2xl font-semibold text-green-600'>Now ${product.price}</p>
                  <p className='flex items-center gap-2 text-gray-500 line-through'>
                    ${product.oldPrice}{" "}
                    <span>
                      <BsInfoCircle />
                    </span>
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-1 text-sm text-black'>
                <p>
                  <span className='font-semibold'>$18/mo</span>{" "}
                  <span className='font-semi-bold text-[12px]'>with affirm</span>{" "}
                  <span className='text-[12px] underline underline-offset-2'>Learn how</span>
                </p>
              </div>
              <div className='border-b-[1px] border-b-zinc-300 pb-4'>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: product._id,
                        title: product.title,
                        description: product.description,
                        image: product.image,
                        price: product.price,
                        oldPrice: product.oldPrice,
                        quantity: 1,
                        brand: product.brand,
                        category: product.category,
                      })
                    ) && toast.success(`${product.title.substring(0, 20)} is add to cart`)
                  }
                  className='h-10 w-32 rounded-full bg-primary text-white duration-300 hover:bg-primary_hover'
                >
                  Add to cart
                </button>
              </div>
              <div>
                <p className='text-base font-semibold'>How do you want your item?</p>
              </div>
              <div className='grid w-full grid-cols-3 gap-4 text-xs'>
                <div className='flex w-full flex-col items-center justify-center rounded-md border border-zinc-400 p-2'>
                  <Image
                    className='w-10'
                    src={ship1Img}
                    alt='shippingImage'
                  />
                  <p>Shipping</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
                <div className='flex w-full flex-col items-center justify-center rounded-md border border-zinc-400 p-2'>
                  <Image
                    className='w-10'
                    src={ship2Img}
                    alt='shippingImage'
                  />
                  <p>Pickup</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
                <div className='flex w-full flex-col items-center justify-center rounded-md border border-zinc-400 p-2'>
                  <Image
                    className='w-10'
                    src={ship3Img}
                    alt='shippingImage'
                  />
                  <p>Devlivery</p>
                  <p>Tomorrow</p>
                </div>
              </div>
              <p className='text-xs font-bold'>
                Jerusalem, Shmuel HaNavi st.
                <span className='ml-1 font-normal underline underline-offset-2'>Change</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  )
}

export default ProductDetails
