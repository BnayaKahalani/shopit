interface IProps {
  amount: number
  precision?: boolean
}

const FormattedPrice = ({ amount, precision = false }: IProps) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: precision ? 2 : 0,
  })
  return <span>{formattedAmount}</span>
}

export default FormattedPrice
