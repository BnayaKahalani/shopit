import React from "react"

const TopFooter = () => {
  return (
    <div className='w-full bg-amber-50'>
      <div className='flex flex-col items-center justify-center gap-4 py-10'>
        <p className='font-medium'>We would love to hear what you think!</p>
        <button
          className='h-9 w-36 rounded-full border-[1px] border-black bg-white transition-all duration-200'
          disabled
        >
          Give feedback
        </button>
      </div>
    </div>
  )
}

export default TopFooter
