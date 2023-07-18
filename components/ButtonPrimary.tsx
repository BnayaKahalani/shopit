type Props = {
  btnText: string
}

const ButtonPrimary = ({ btnText }: Props) => {
  return (
    <button
      className='h-7 w-20 rounded-full bg-primary text-sm font-semibold text-white duration-300'
      disabled
    >
      {btnText}
    </button>
  )
}

export default ButtonPrimary
