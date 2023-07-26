import { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { Product } from "../type"
import Link from "next/link"

const API = process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/"

const SearchBar = () => {
  const [productData, setProductData] = useState<Product[]>([])
  const [term, setTerm] = useState("")
  const [showOptions, setShowOptions] = useState(false)

  const handleChange = ({ target }: any) => {
    setTerm(target.value.trimStart())
  }

  const fetchData = async () => {
    try {
      const response = await fetch(`${API}api/productdata`)
      const data = await response.json()
      setProductData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
    if (term) setShowOptions(true)
    else setShowOptions(false)
  }, [term])

  const handleClick = (option: any) => {
    setTerm("")
  }

  const renderedOptions = productData
    .filter((option) => {
      const regex = new RegExp(term, "i")
      return regex.test(option.title)
    })
    .map((option: any) => {
      return (
        <article
          className='[ border-b-[0.5px] border-white  p-2'
          key={option._id}
          onClick={() => handleClick(option)}
        >
          <Link
            href={{
              pathname: `product/${option._id}`,
              query: {
                _id: option._id,
                title: option.title,
                description: option.description,
                price: option.price,
                oldPrice: option.oldPrice,
                brand: option.brand,
                category: option.category,
                image: option.image,
                isNew: option.isNew,
                rate: option.rate,
              },
            }}
            as={`product/${option._id}`}
          >
            {option.title.substring(0, 45) + "..."}
          </Link>
        </article>
      )
    })

  const content = renderedOptions.length > 0 ? renderedOptions : "No matches found"

  return (
    <>
      <div className='relative flex h-10 flex-1 flex-col justify-center'>
        <div className='flex flex-col gap-5'>
          <input
            className='h-[45px] w-full rounded-full border-[1px] border-transparent px-4 text-base text-black outline-none focus-visible:border-black'
            type='text'
            placeholder='Search at Shopit'
            value={term}
            onChange={handleChange}
          />
          <span className='txt-black absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-xl'>
            <IoSearchOutline />
          </span>
        </div>
        {showOptions && (
          <div className=' absolute top-11 w-full rounded-3xl border-[1px] border-white bg-amber-500 p-3'>
            {content}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchBar
