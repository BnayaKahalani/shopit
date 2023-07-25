import { BsStar, BsStarFill } from "react-icons/bs"

const useRate = (product: any) => {
  const stars = []
  for (let i = 0; i < product.rate; i++) {
    stars.push(<BsStarFill key={i} />)
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<BsStar key={i} />)
  }
  return stars
}

export default useRate
