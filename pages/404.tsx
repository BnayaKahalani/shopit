import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFoundImg } from "@/public/assets/images"

const Custom404 = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center pb-2'>
      <Image
        src={notFoundImg}
        alt='notFoungImg'
        className='h-[550px] w-full object-cover'
      />
      <Link href='/'>
        <button className='mt-2 text-sm underline-offset-4 hover:text-primary_hover hover:underline'>
          Back to home
        </button>
      </Link>
    </div>
  )
}

export default Custom404
