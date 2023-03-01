import React from 'react'
import "../../css/footer.css"
import car from "../../assets/car.png"

function Footer() {
  return (
    <section className='footer section' id='footer'>
      <div className='footer__container container'>

          <div className='footer__content'>
            <p className='footer__content__subtitle'>Skontaktuj się z nami!</p>

            <h2 className='footer__content__title'>To jak? Widzimy się na
              tym wielkim wydarzeniu?</h2>

            <div className='footer__content__email'>
              <p>email</p>
              <a href="mailto:studio@reccly.pl">studio@reccly.pl</a>
            </div>

            <div className='footer__content__phone'>
              <p>telefon</p>
              <a href="tel:+48515991639">+48 515 991 639</a>
            </div>

            <div className='footer__content__socials'>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>

            <button className='footer__content__button button'>
              wiadomość messenger
            </button>

          </div>

          <div className='footer__content__img'>
            <img src={car} alt="car" />
          </div>

      </div>
          <div className='footer__rights'>
            <p>@<span>reccly.pl</span>2022</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
    </section>
  )
}

export default Footer