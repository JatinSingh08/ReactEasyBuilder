import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
const Header = () => {
  return (
      <header className="App-header">
        <div className='flex items-center justify-center gap-4'>
          <GiHamburgerMenu className='cursor-pointer'/>
          <p>
            <span className='font-semibold'>
              Design Board

            </span>
            <span className='text-[#ACB0BC]'> (Draft)</span>
          </p>
        </div>
      </header>
  )
}

export default Header
