import { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { Product } from "../type"

const SearchBar = () => {
  const [productData, setProductData] = useState<Product[]>([])
  const [term, setTerm] = useState("")
  const [showOptions, setShowOptions] = useState(false)

  const handleChange = ({ target }: any) => {
    setTerm(target.value.trimStart())
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/productdata")
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
  console.log("productData", productData)

  const handleClick = (option: any) => {
    console.log("You clicked:", option)
  }

  const renderedOptions = productData
    .filter((option: any) => {
      const regex = new RegExp(term, "i")
      return regex.test(option.name)
    })
    .map((option: any) => {
      return (
        <article
          key={option.id}
          onClick={() => handleClick(option)}
        >
          {option.name}
        </article>
      )
    })

  return (
    <>
      <div className='relative flex h-10 flex-1'>
        <input
          className='duration 200 h-full w-full rounded-full border-[1px] border-transparent px-4 text-base text-black outline-none focus-visible:border-black'
          type='text'
          placeholder='Search at Shopit'
          value={term}
          onChange={handleChange}
        />
        <span className='txt-black absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-xl'>
          <IoSearchOutline />
        </span>
      </div>
      {/* {showOptions && <div className='absolute'>{renderedOptions}</div>} */}
    </>
  )
}

export default SearchBar

export const getServerSideProps = async () => {
  const productData = await (await fetch("http://localhost:3000/api/productdata")).json()

  return {
    props: { productData },
  }
}
