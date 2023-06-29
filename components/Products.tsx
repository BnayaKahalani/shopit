import React, { useState, useEffect } from "react"
import { Item } from "../type"
import Image from "next/image"
import { GoPlus } from "react-icons/go"
import { BsStarFill } from "react-icons/bs"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/shopperSlice"
import toast, { Toaster } from "react-hot-toast"

const Products = ({ productData }: any) => {
  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const generateRandomCount = () => {
    const maxCount = 5
    const randomCount = Math.floor(Math.random() * maxCount) + 1
    setCount(randomCount)
  }

  useEffect(() => {
    generateRandomCount()
  }, [count])

  return (
    <div className='grid grid-cols-4 gap-4 px-4 py-6'>
      {productData.map((item: Item) => (
        <div
          className='group mb-6 border-[1px] border-gray-200'
          key={item._id}
        >
          <div className='h-[350px] w-full overflow-hidden p-1'>
            <Image
              className='h-full w-full scale-100 object-contain duration-300 group-hover:scale-105'
              width={300}
              height={250}
              src={item.image}
              alt='itemImage'
            />
          </div>
          <div className='flex flex-col justify-center px-2 py-4'>
            <div className='flex justify-between py-2'>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: item._id,
                      title: item.title,
                      description: item.description,
                      image: item.image,
                      price: item.price,
                      oldPrice: item.oldPrice,
                      quantity: 1,
                      brand: item.brand,
                      category: item.category,
                    })
                  ) && toast.success(`${item.title.substring(0, 20)} is add to cart`)
                }
                className='flex h-9 w-20 items-center justify-center gap-1 rounded-full bg-primary text-white duration-300 hover:bg-primary_hover'
              >
                <span>
                  <GoPlus />
                </span>
                Add
              </button>
              <Link
                href={{
                  pathname: `product/${item._id}`,
                  query: {
                    _id: item._id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    brand: item.brand,
                    category: item.category,
                    image: item.image,
                    isNew: item.isNew,
                  },
                }}
                as={`product/${item._id}`}
              >
                <button className='flex h-9 w-24 items-center justify-center gap-1 rounded-full border-[1px] border-black bg-white text-black duration-300 hover:bg-primary_hover hover:text-white'>
                  <span>
                    <GoPlus />
                  </span>
                  Details
                </button>
              </Link>
            </div>
            <div className='flex items-center gap-3'>
              <p className='font-titleFont text-lg font-semibold text-green-700'>Now ${item.price}</p>
              <p className='decoration text-gray-500 line-through'>${item.oldPrice}</p>
            </div>
            <p className='font-titleFont py-2 text-lg font-semibold'>{item.title.substring(0, 25)}</p>
            <p className='text-base text-zinc-500'>{item.description.substring(0, 80)}...</p>
          </div>
          <div className='mt-2 flex items-center justify-between gap-2 text-sm'>
            <div className='flex gap-1 text-sm'>
              {Array.from({ length: count }, (_, index) => (
                <BsStarFill key={index} />
              ))}
              <p>{getRandomInt(25, 100)}</p>
            </div>
          </div>
        </div>
      ))}
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

export default Products
