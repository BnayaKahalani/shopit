interface Props {
  title: string
  description: string
  btnText: string
  className: string
}

const BannerText = ({ title, description, btnText, className }: Props) => {
  return (
    <div className={className}>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-sm leading-5'>{description}</p>
      <button
        className='h-8 w-24 rounded-full border-[1px] bg-white text-sm font-semibold text-black'
        disabled
      >
        {btnText}
      </button>
    </div>
  )
}

export default BannerText
