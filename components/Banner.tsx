import { sliderImgOne } from "@/public/assets/images"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import BannerText from "./BannerText"

const Banner = () => {
  const settings = {
    dots: true,
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
              title='Summer Vibes Unleashed!'
              description='Embrace the Sun-kissed Style'
              btnText='SHOP NOW'
            />
          </div>
        </Slider>
      </div>
      <div className='w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between'></div>
    </div>
  )
}

export default Banner
