import { bannerImg, sliderImgOne } from "@/public/assets/images"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import BannerText from "./BannerText"
import ButtonPrimary from "./ButtonPrimary"

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]'>
      <div className='w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative'>
        <Slider {...settings}>
          <div className='w-full h-[410px] relative'>
            <Image
              src={sliderImgOne}
              alt='sliderImgOne'
              priority
            />
            <BannerText
              className='absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white'
              title='Summer Vibes Unleashed!'
              description='Embrace the Sun-kissed Style'
              btnText='SHOP NOW'
            />
          </div>
        </Slider>
      </div>
      <div className='w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-black'>Pick of the day</h2>
          <p className='text-base text-zinc-600 underline underline-offset-2'>View all</p>
        </div>
        <Image
          className='h-60 object-cover'
          src={bannerImg}
          alt='bannerImg'
        />
        <ButtonPrimary btnText='Options' />
        <p
          className='text-lg text-black font-sem
        '
        >
          From $50
        </p>
        <p className='text-base text-gray-500 -mt-1'>TV for your living room</p>
      </div>
    </div>
  )
}

export default Banner
