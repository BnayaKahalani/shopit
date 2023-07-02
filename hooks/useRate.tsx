import { BsStar, BsStarFill } from "react-icons/bs"

const useRate = (product: any) => {
  const stars = []
  for (let i = 0; i < product.rate; i++) {
    stars.push(<BsStarFill />)
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<BsStar />)
  }
  return stars
}

export default useRate
