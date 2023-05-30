//1.42

const Footer = () => {
  return (
    <div className='w-full bg-primary text-white pt-4 pb-6'>
      <div className='max-w-contentContainer mx-auto'>
        <ul className='w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-200'>
          <li className='hover: text-white duration-200 ml-2 cursor-pointer'>All Departments</li>
          <li className='hover: text-white duration-200 ml-2 cursor-pointer'>Contact</li>
          <li className='hover: text-white duration-200 ml-2 cursor-pointer'>Career</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
