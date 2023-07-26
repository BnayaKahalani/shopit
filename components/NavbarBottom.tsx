import { phoneImg } from "@/public/assets/images"
import Image from "next/image"
import { FiChevronDown } from "react-icons/fi"
import { FaPlaceOfWorship } from "react-icons/fa"
import { MdOutlineLocationOn } from "react-icons/md"

const NavbarBottom = () => {
  return (
    <div className='mx-auto flex max-w-container items-center justify-between px-6 py-2'>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2'>
          <Image
            className='w-6'
            src={phoneImg}
            alt='phoneImg'
          />
          <p className='text-sm font-semibold'>How do you want your items?</p>
          <FiChevronDown />
          <span className='ml-2 inline-flex h-4 w-[1px] bg-white'></span>
        </div>
        <div className='flex items-center gap-2'>
          <MdOutlineLocationOn />
          <p className='text-sm text-zinc-100'>Dizengof Center</p>
          <FaPlaceOfWorship />
          <p className='text-sm text-zinc-100'>Tel Aviv</p>
        </div>
      </div>
      <ul className='flex gap-6 text-sm font-semibold'>
        <li className='bottomNavLi'>What&apos;s new?</li>
        <li className='bottomNavLi'>Flash Deals</li>
      </ul>
    </div>
  )
}

export default NavbarBottom
