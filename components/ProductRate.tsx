import useRandom from "@/hooks/useRandom"
import useRate from "@/hooks/useRate"
import { Product } from "@/type"

interface IProps {
  product: Product
}

const ProductRate = ({ product }: IProps) => {
  const rate = useRate(product)
  const randomReviewsNum = useRandom(25, 100)

  return (
    <div className='mt-2 flex items-center justify-between gap-2 text-sm'>
      <div className='flex items-center justify-center gap-1 text-sm'>
        {rate}
        <p>{randomReviewsNum}</p>
      </div>
    </div>
  )
}

export default ProductRate
