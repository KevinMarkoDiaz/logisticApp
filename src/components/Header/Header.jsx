import React from 'react'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  return (
    <header className='header'>
      <nav className='lay'>
        <div className='row'>
          <div className="col-4 header__left">
            <HamburgerMenu/>
          </div>
          <div className='col-4 header__middle'>
            DRIVERS
          </div>
        </div>  
      </nav>
    </header>
  )
}
export default Header;