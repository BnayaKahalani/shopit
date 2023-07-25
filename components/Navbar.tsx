import logo from "../public/assets/images/logo.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import NavbarBottom from "./NavbarBottom"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { useSession, signIn, signOut } from "next-auth/react"
import { addUser, removeUser } from "@/redux/shopperSlice"
import useCommas from "@/hooks/useCommas"

const Navbar = () => {
  const { data: session } = useSession()
  const dispatch = useDispatch()
  const productData = useSelector((state: any) => state.shopper.productData)
  const userInfo = useSelector((state: any) => state.shopper.userInfo)
  const [totalAmount, setTotalAmount] = useState("0")

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        })
      )
    } else {
      dispatch(removeUser())
    }
  }, [session, dispatch])

  useEffect(() => {
    let price = 0
    productData.map((item: any) => {
      price += item.price * item.quantity
      return price
    })
    setTotalAmount(price.toFixed(2))
  }, [productData])

  const formattedTotalAmount = useCommas(totalAmount)

  return (
    <div className='sticky top-0 z-10 w-full bg-primary text-white'>
      <div className='h-full w-full border-b-[1px] border-b-white'>
        <div className='mx-auto flex h-20 max-w-container items-center gap-2 px-4'>
          <Link href='/'>
            <div className='navbar'>
              <Image
                src={logo}
                alt='logo'
              />
            </div>
          </Link>
          <div className='navbarHover'>
            <div className='grid w-4 grid-cols-2 gap-[2px]'>
              <span className='inline-flex h-1.5 w-1.5 border-[1px] border-white'></span>
              <span className='inline-flex h-1.5 w-1.5 border-[1px] border-white'></span>
              <span className='inline-flex h-1.5 w-1.5 border-[1px] border-white'></span>
              <span className='inline-flex h-1.5 w-1.5 border-[1px] border-white'></span>
            </div>
            <p className='text-base font-semibold'>Departments</p>
          </div>
          <div className='navbarHover'>
            <div className='grid w-4 grid-cols-2 gap-[2px]'>
              <span className='inline-flex h-1.5 w-1.5 rounded-md border-[1px] border-white'></span>
              <span className='inline-flex h-1.5 w-1.5 rounded-md border-[1px] border-white'></span>
              <span className='inline-flex h-1.5 w-1.5 rounded-md border-[1px] border-white'></span>
              <span className='inline-flex h-1.5 w-1.5 rounded-md border-[1px] border-white'></span>
            </div>
            <p className='text-base font-semibold'>Services</p>
          </div>
          <SearchBar />
          <div className='navbarHover'>
            <AiOutlineHeart />
            <div>
              <p className='text-xs'>Wishlist</p>
              <h2 className='-mt-1 text-base font-semibold'>My Items</h2>
            </div>
          </div>
          {userInfo ? (
            <div
              onClick={() => signOut()}
              className='navbarHover'
            >
              <Image
                width={500}
                height={500}
                className='w-10 rounded-full object-cover'
                src={userInfo.image}
                alt='userImage'
              />
              <div>
                <p className='text-xs'>Sign Out</p>
                <h2 className='-mt-1 text-base font-semibold'>{userInfo.name}</h2>
              </div>
            </div>
          ) : (
            <div
              onClick={() => signIn()}
              className='navbarHover'
            >
              <AiOutlineUser className='text-lg' />
              <div>
                <p className='text-xs'>Sign in</p>
                <h2 className='-mt-1 text-base font-semibold'>Account</h2>
              </div>
            </div>
          )}
          <Link href='/cart'>
            <div className='relative flex h-12 flex-col items-center justify-center gap-2 rounded-full bg-transparent px-5 duration-300 hover:bg-primary_hover'>
              <BsCart2 className='text-2xl' />
              <p className='text-[12px]'>${formattedTotalAmount}</p>
              <span className='font-bodyFont absolute right-5 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-black'>
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
