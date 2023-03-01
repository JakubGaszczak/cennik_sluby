import React, { useEffect, useState } from 'react'
import "../../css/header.css"
import logo from "../../assets/logo.png"

function Header() {

  const [toggleMenu, setTogleMenu] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")

    if (this.scrollY >= 80) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")
  })

  const closeMobileNav = () => {
    setMobileNav(false)
  }

  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>
                <img src={logo} alt="logo" />
            </a>

            <div>
              <ul className={mobileNav ? "nav__list nav__list__mobile-show" : "nav__list"}>

                <li className='nav__list__home nav__list-item'>
                  <a onClick={closeMobileNav} href="#home">Home</a>
                  <i onClick={() => {setTogleMenu(!toggleMenu)
                  }} className="nav__list__home-arrow fa-solid fa-angle-down"></i>
                  <span className='nav__list__home-new'>new</span>
                  <ul className={toggleMenu ? "nav__list__home-menu" : "nav__list__home-menu show-menu"}>
                    <li>Main</li>
                    <li>Web Development</li>
                    <li>Managment</li>
                  </ul>
                </li>

                <li className='nav__list-item'>
                  <a onClick={closeMobileNav} href="#about">O nas</a>
                </li>

                <li className='nav__list-item'>
                  <a onClick={closeMobileNav} href="#priceList">Cennik</a>
                </li>

                <li className='nav__list-item'>
                  <a onClick={closeMobileNav} href="#packages">Pakiety</a>
                </li>

                <li className='nav__list-item'>
                  <a onClick={closeMobileNav} href="#footer">Kontakt</a>
                </li>

                <li className='nav__list-item'>
                  <a onClick={closeMobileNav} className='button' href="#">Sprawdź termin</a>
                </li>
              </ul>
            </div>

            {mobileNav ? 
              <div className='nav__mobile-close'>
                <i onClick={() => {
                  setMobileNav(!mobileNav)
                  setTogleMenu(false)
                }} className="fa-solid fa-xmark"></i>
              </div>
            :
              <div className='nav__mobile-toggle'>
                <i onClick={() => setMobileNav(!mobileNav)} className="nav__hamburger fa-solid fa-bars"></i>
              </div>
            }

        </nav>
    </header>
  )
}

export default Header