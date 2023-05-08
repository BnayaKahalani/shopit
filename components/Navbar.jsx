import logo from "../public/assets/images/logo.png"
import Image from "next/image"
import React from "react"

const Navbar = () => {
  return (
    <div className='w-full bg- text-white'>
      <Image
        src={logo}
        alt='logo'
      />
    </div>
  )
}

export default Navbar
