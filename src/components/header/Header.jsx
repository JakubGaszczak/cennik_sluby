import React, { useState } from 'react'
import "../../css/header.css"
import logo from "../../assets/logo.png"

function Header() {

  const [toggleMenu, setTogleMenu] = useState(false)

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")

    if (this.scrollY >= 80) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")
  })

  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>
                <img src={logo} alt="logo" />
            </a>

            <div>
              <ul className='nav__list'>

                <li className='nav__list__home'>
                  <a href="#home">Home</a>
                  <i onClick={() => {setTogleMenu(!toggleMenu)
                  }} class="nav__list__home-arrow fa-solid fa-angle-down"></i>
                  <span className='nav__list__home-new'>new</span>
                  <ul className={toggleMenu ? "nav__list__home-menu" : "nav__list__home-menu show-menu"}>
                    <li>Main</li>
                    <li>Web Development</li>
                    <li>Managment</li>
                  </ul>
                </li>

                <li>
                  <a href="#about">O nas</a>
                </li>

                <li>
                  <a href="#price__list">Cennik</a>
                </li>

                <li>
                  <a href="#packages">Pakiety</a>
                </li>

                <li>
                  <a href="additional__services">Dodatkowe usługi</a>
                </li>

                <li>
                  <a href="#contact">Kontakt</a>
                </li>

                <li>
                  <a className='button' href="#">Sprawdź termin</a>
                </li>
              </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header