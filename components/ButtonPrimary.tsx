type Props = {
  btnText: string
}

const ButtonPrimary = ({ btnText }: Props) => {
  return (
    <button className='w-20 h-7 text-sm font-semibold rounded-full bg-amber-500 text-white hover:bg-amber-600 duration-300'>
      {btnText}
    </button>
  )
}

export default ButtonPrimary
