import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-10'>
        {/*Left*/}
        <div className='relative flex items-cnter h-10 cursor-pointer my-auto'>
        <img src="https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg" alt="Nestaway Logo"  />
        </div>

        {/*Right*/}
        <div className='flex items-center justify-end text-gray-500'>
            <MenuIcon  className="h-8 cursor-pointer"/>
        </div>
    </header>
  )
}

export default Header