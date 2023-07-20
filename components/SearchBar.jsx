import React, { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"

const SearchBar = ({ options }) => {
  const [searchOptions, setSearchOptions] = useState([])

  useEffect(() => {
    setSearchOptions(options)
  }, [options])

  console.log("options", options)

  return (
    <div className='relative flex h-10 flex-1'>
      <input
        className='duration 200 h-full w-full rounded-full border-[1px] border-transparent px-4 text-base text-black outline-none focus-visible:border-black'
        type='text'
        placeholder='Search at Shopit'
      />
      <span className='txt-black absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-xl'>
        <IoSearchOutline />
      </span>
    </div>
  )
}

export default SearchBar
