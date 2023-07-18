const Footer = () => {
  return (
    <div className='w-full bg-primary pb-6 pt-4 text-white'>
      <div className='mx-auto max-w-contentContainer'>
        <ul className='flex w-full flex-wrap justify-center gap-1 text-sm text-zinc-200'>
          <li className='hover: ml-2 text-white duration-200'>All Departments</li>
          <li className='hover: ml-2 text-white duration-200'>Contact</li>
          <li className='hover: ml-2 text-white duration-200'>Career</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
