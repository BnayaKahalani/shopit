import {
  bannerImg,
  sliderImgOne,
  sliderImgTwo,
  sliderImgThree,
  sliderImgFour,
  sliderImgFive,
} from "@/public/assets/images"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import BannerText from "./BannerText"
import ButtonPrimary from "./ButtonPrimary"
import { CgChevronLeft } from "react-icons/cg"

const Banner = () => {
  const settings = {
    dots: false,
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
        className='absolute left-4 top-80 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-gray-100 duration-300'
      >
        <CgChevronLeft className='z-10 text-6xl' />
      </div>
    )
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props
    return (
      <div
        onClick={onClick}
        className='absolute right-4 top-80 z-20 flex h-12 w-12 cursor-pointer items-center  justify-center rounded-full border-2 border-transparent bg-gray-100 duration-300'
      >
        <CgChevronLeft className='z-10 rotate-180 text-6xl' />
      </div>
    )
  }
  return (
    <div className='font-titleFont flex w-full gap-4 border-b-[1px] bg-white px-4 py-6'>
      <div className='shadow-bannerShadow relative h-[410px] w-2/3 rounded-lg'>
        <Slider {...settings}>
          <div className='relative h-[410px] w-full'>
            <Image
              className='h-full w-full rounded-lg object-cover'
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
          <div className='relative h-[410px] w-full'>
            <Image
              className='h-full w-full rounded-lg object-cover'
              src={sliderImgTwo}
              alt='sliderImgTwo'
              priority
            />
            <BannerText
              className='absolute left-4 top-6 flex h-full w-60 flex-col gap-3 text-white'
              title='Up to 65% off'
              description='New savings every week!'
              btnText='SHOP NOW'
            />
          </div>
          <div className='relative h-[410px] w-full'>
            <Image
              className='h-full w-full rounded-lg object-cover'
              src={sliderImgThree}
              alt='sliderImgThree'
              priority
            />
            <BannerText
              className='absolute left-4 top-6 flex h-full w-60 flex-col gap-3 text-black'
              title='Up to 65% off'
              description='New savings every week!'
              btnText='SHOP NOW'
            />
          </div>
          <div className='relative h-[410px] w-full'>
            <Image
              className='h-full w-full rounded-lg object-cover'
              src={sliderImgFour}
              alt='sliderImgFour'
              priority
            />
            <BannerText
              className='absolute left-4 top-6 flex h-full w-60 flex-col gap-3 text-black'
              title='Up to 65% off'
              description='New savings every week!'
              btnText='SHOP NOW'
            />
          </div>
          <div className='relative h-[410px] w-full'>
            <Image
              className='h-full w-full rounded-lg object-cover'
              src={sliderImgFive}
              alt='sliderImgFive'
              priority
            />
            <BannerText
              className='absolute left-4 top-6 flex h-full w-60 flex-col gap-3 text-black'
              title='Up to 65% off'
              description='New savings every week!'
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
