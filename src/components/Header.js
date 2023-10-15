import React ,{useState} from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import Menu from './Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-10'>
        {/*Left*/}
        <div className='relative flex items-cnter h-10 cursor-pointer my-auto'>
        <img src="https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg" alt="Nestaway Logo"  />
        </div>

        {/*Right*/}
        <div className='flex items-center justify-end text-gray-500'>
            <MenuIcon  className="h-8 cursor-pointer" onClick={toggleMenu} />
        </div>
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  )
}

export default Header