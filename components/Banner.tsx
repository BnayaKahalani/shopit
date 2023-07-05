import { bannerImg, sliderImgOne } from "@/public/assets/images"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import BannerText from "./BannerText"
import ButtonPrimary from "./ButtonPrimary"
import { CgChevronLeft } from "react-icons/cg"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  function SampleNextArrow(props: any) {
    const { onClick } = props
    return (
      <div
        onClick={onClick}
        className='absolute left-1 top-1 z-10 flex h-72 w-20 cursor-pointer items-center justify-center rounded-md border-2 border-transparent duration-300 hover:border-black active:shadow-amazonInput'
      >
        <CgChevronLeft className='z-10 text-6xl' />
        <CgChevronLeft className='absolute left-[12px] text-6xl text-whiteText' />
      </div>
    )
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props
    return (
      <div
        onClick={onClick}
        className='absolute right-1 top-1 z-10 flex h-72 w-20 cursor-pointer items-center justify-center rounded-md border-2 border-transparent duration-300 hover:border-black active:shadow-amazonInput'
      >
        <CgChevronLeft className='z-10 rotate-180 text-6xl' />
        <CgChevronLeft className='absolute right-[12px] rotate-180 text-6xl text-whiteText' />
      </div>
    )
  }
  return (
    <div className='font-titleFont flex w-full gap-4 border-b-[1px] bg-white px-4 py-6'>
      <div className='shadow-bannerShadow relative h-[410px] w-2/3 rounded-lg'>
        <Slider {...settings}>
          <div className='relative h-[410px] w-full'>
            <Image
              src={sliderImgOne}
              alt='sliderImgOne'
              priority
            />
            <BannerText
              className='absolute left-4 top-6 flex h-full w-60 flex-col gap-3 text-white'
              title='Summer Vibes Unleashed!'
              description='Embrace the Sun-kissed Style'
              btnText='SHOP NOW'
            />
          </div>
        </Slider>
      </div>
      <div className='shadow-bannerShadow flex w-1/3 flex-col justify-between rounded-lg border-[1px] border-gray-200 p-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-black'>Pick of the day</h2>
          <p className='text-base text-zinc-600 underline underline-offset-2 hover:cursor-pointer'>View all</p>
        </div>
        <Image
          className='h-60 object-cover'
          src={bannerImg}
          alt='bannerImg'
        />
        <ButtonPrimary btnText='Options' />
        <p
          className='font-sem text-lg text-black
        '
        >
          From $50
        </p>
        <p className='-mt-1 text-base text-gray-500'>Outdoor furniture</p>
      </div>
    </div>
  )
}

export default Banner
