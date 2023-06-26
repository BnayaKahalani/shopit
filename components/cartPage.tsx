import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { emptyCart, phoneImg, ship1Img, ship2Img, ship3Img, warningImg } from "../public/assets/images"
import { TbReload } from "react-icons/tb"
import { HiMinusSmall } from "react-icons/hi2"
import { MdOutlineAdd } from "react-icons/md"
import { IoMdClose } from "react-icons/io"
import Image from "next/image"
import { StoreProduct } from "@/type"
import FormattedPrice from "./FormattedPrice"
import { plusQuantity, minusQuantity, deleteItem, resetCart } from "../redux/shopperSlice"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useSession } from "next-auth/react"

const CartPage = () => {
  const { data: session } = useSession()
  const dispatch = useDispatch()
  const stripePromise = loadStripe(process.env.stripe_public_key)
  const productData = useSelector((state: any) => state.shopper.productData)
  const userInfo = useSelector((state: any) => state.shopper.userInfo)
  const [warningMsg, setWarningMsg] = useState(false)
  const [totalOldPrice, setTotalOldPrice] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)
  const [amt, setAmt] = useState(0)

  useEffect(() => {
    setWarningMsg(true)
    let oldPrice = 0
    let savings = 0
    let amt = 0

    productData.map((item: StoreProduct) => {
      oldPrice += item.oldPrice * item.quantity
      savings += item.oldPrice - item.price
      amt += item.price * item.quantity
      return
    })
    setTotalOldPrice(oldPrice)
    setTotalSavings(savings)
    setAmt(amt)
  }, [productData])

  const handleCheckout = async () => {
    const stripe = await stripePromise

    const checkoutSession = await axios.post("api/create-checkout-session", {
      items: productData,
      email: session?.user?.email,
    })

    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })
    if (result?.error) alert(result?.error.message)
  }
  return (
    <div className='w-full py-20'>
      <div className='flex w-full gap-10'>
        <div className='flex w-2/3 flex-col gap-5'>
          <h1 className='text-2xl font-bold text-black'>
            Cart <span className='font-normal text-lightText'>({productData.length} items)</span>
          </h1>
          <div>
            <div className='mb-2 flex items-center gap-2 text-xl font-bold'>
              <Image
                className='w-10'
                src={phoneImg}
                alt='phoneImg'
              />
              <p>Pickup and delivery options</p>
            </div>
            <div className='grid w-full grid-cols-3 gap-4 text-xs'>
              <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md border border-zinc-400 p-2'>
                <Image
                  className='w-10'
                  src={ship1Img}
                  alt='shippingImg'
                />
                <p className='font-bold'>Shipping</p>
                <p>All items available</p>
              </div>
              <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md border border-zinc-400 p-2'>
                <Image
                  className='w-10'
                  src={ship2Img}
                  alt='shippingImg'
                />
                <p className='font-bold'>Pickup</p>
                <p>All items available</p>
              </div>
              <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md border border-zinc-400 p-2'>
                <Image
                  className='w-10'
                  src={ship3Img}
                  alt='shippingImg'
                />
                <p className='font-bold'>Delivery</p>
                <p>All items available</p>
              </div>
            </div>
            <div className='text-sm font-semibold text-zinc-500'>
              <p>
                Sold and shipped by <span className='font-semibold text-black'>Shopit.com</span>
              </p>
              <div className='flex gap-2'>
                <button className='rounded-sm border-[1px] border-blue-500 px-2 py-[1px] text-sm text-blue-500'>
                  Best seller
                </button>
                <button className='rounded-sm border-[1px] border-red-500 px-2 py-[1px] text-sm text-red-500 '>
                  Rollback
                </button>
              </div>
              <div>
                {productData.map((item: StoreProduct) => (
                  <div
                    key={item._id}
                    className='flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4'
                  >
                    <div className='flex w-3/4 items-center gap-2'>
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
                        <p className='flex items-center gap-1 text-sm text-zinc-500'>
                          <span className='w-4 rounded-full bg-blue-400 text-xs text-white'>
                            <TbReload className='rotate-180' />
                          </span>{" "}
                          Free 30-day returns
                        </p>
                        <div className='mt-2 flex items-center gap-6'>
                          <button className='text-sm text-zinc-600 underline decoration-[1px] underline-offset-2 duration-300 hover:text-zinc-400 hover:no-underline'>
                            Remove
                          </button>
                          <div className='flex h-9 w-28 items-center justify-between rounded-full border border-zinc-400 px-3 text-base font-semibold text-black'>
                            <button className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-base text-zinc-600 duration-200 hover:bg-zinc-400 hover:text-white'>
                              <HiMinusSmall />
                            </button>
                            <span>{item.quantity}</span>
                            <button className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-base text-zinc-600 duration-200 hover:bg-zinc-400 hover:text-white'>
                              <MdOutlineAdd />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex w-1/4 flex-col items-end gap-1 text-right'>
                      <p className='text-xl font-semibold text-green-500'>
                        <FormattedPrice amount={item.price * item.quantity} />
                      </p>
                      <p className='text-sm text-zinc-500 line-through'>
                        <FormattedPrice amount={item.oldPrice * item.quantity} />
                      </p>
                      <div className='flex items-center gap-2 text-xs'>
                        <p className='bg-green-200 px-2 py-[1px] text-[8px] uppercase'>You save </p>
                        <p className='font-semibold text-green-500'>
                          <FormattedPrice amount={item.oldPrice * item.quantity - item.price * item.quantity} />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => dispatch(resetCart())}
                className='h-10 w-44 rounded-full bg-red-500 text-base font-semibold text-white duration-300 hover:bg-red-800'
              >
                Reset Cart
              </button>
            </div>
          </div>
        </div>
        <div className='mt-24 flex h-[500px] w-1/3 flex-col justify-center gap-4 rounded-md border-[1px] border-zinc-400 p-4'>
          <div className='flex w-full flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
            {!userInfo ? (
              <button
                onClick={handleCheckout}
                className='h-10 w-full rounded bg-primary font-semibold text-white duration-300 hover:bg-primary_hover'
              >
                Continue to checkout
              </button>
            ) : (
              <button className='h-10 w-full rounded bg-primary font-semibold text-white duration-300 hover:bg-primary_hover'>
                Continue to checkout
              </button>
            )}
            {!userInfo && (
              <p className='-mt-4 text-center text-sm font-semibold text-red-500'>Please sign in for checkout</p>
            )}
            {warningMsg && (
              <div className='flex items-center justify-between gap-4 rounded-lg bg-primary p-2 text-white'>
                <Image
                  className='w-8'
                  src={warningImg}
                  alt='warningImg'
                />
                <p className='text-sm'>Items in your cart have reduced prices. Check out now for extra savings!</p>
                <IoMdClose
                  onClick={() => setWarningMsg(false)}
                  className='cursor-pointer text-3xl duration-300 hover:text-red-400'
                />
              </div>
            )}
            {!userInfo && (
              <p className='text-center text-sm'>
                For the best shopping experience{" "}
                <span className='underline decoration-[1px] underline-offset-2'>sign in</span>
              </p>
            )}
          </div>
          <div className='flex w-full flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
            <div>
              <div className='flex justify-between text-sm'>
                <p className='font-semibold'>
                  Subtotal <span>{productData.length} items</span>
                </p>
                <p className='text-base text-zinc-500 line-through'>
                  <FormattedPrice amount={totalOldPrice} />
                </p>
              </div>
              <div className='flex justify-between text-sm'>
                <p className='font-semibold'>Savings</p>
                <p className='flex rounded-lg bg-green-100 px-[2px] py-1 font-bold text-green-500'>
                  -<FormattedPrice amount={totalSavings} />
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
            <div className='flex flex-col gap-1'>
              <div className='flex justify-between text-sm'>
                <p>Shipping</p>
                <p className='text-green-400'>Free</p>
              </div>
              <div className='flex justify-between text-sm'>
                <p className='font-semibold'>Taxes</p>
                <p className='text-zinc-800'>Calculated at checkout</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <p>Estimated total</p>
            <p className='text-lg font-bold text-zinc-800'>
              <FormattedPrice amount={amt} />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
