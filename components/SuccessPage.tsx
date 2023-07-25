import { resetCart } from "@/redux/shopperSlice"
import Link from "next/link"
import { useDispatch } from "react-redux"

const SuccessPage = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className='text-2xl font-semibold text-primary'>Thank you for shopping in Shopit.com</h1>
      <Link href='/'>
        <button
          onClick={() => dispatch(resetCart())}
          className='text-lg text-lightText decoration-[1px] underline-offset-4 duration-300 hover:text-primary_hover hover:underline'
        >
          Continue shopping...
        </button>
      </Link>
    </div>
  )
}

export default SuccessPage
