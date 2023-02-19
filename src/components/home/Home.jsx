import React from 'react'
import "../../css/home.css"

import greyVector from "../../assets/grayVector.png"
import redVector from "../../assets/redVector.png"
import coupleDancing from "../../assets/coupleDancing.png"
// import greyVector from "../../assets/grayVector.png"
// import greyVector from "../../assets/grayVector.png"
// import greyVector from "../../assets/grayVector.png"
// import greyVector from "../../assets/grayVector.png"

function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__container container'>
        <div className='home__content'>
            <div className='home__title'>
              <h4>Film ze ślubu i wesela</h4>
              <h1>Stworzymy dla Was<br></br> wyjątkową pamiątkę!</h1>
            </div>
            <div className='home__text'>
              <p>Twoja pamiątka ślubna, jest bardzo ważnym punktem wspomnień, 
                które potrafi cieszyć oko przez bardzo długie lata. Zdajemy sobie sprawę z powagi zlecenia i nie bagatelizujemy go. Do każdego klienta podchodzimy indywidualnie, a więc ze świeżym pomysłem i podejściem. Dbamy również o to, aby każdy klient był jak najbardziej zadowolony ze zleconego nam zadania.</p>
            </div>
            <div className='home__buttons'>
              <button className='button'>Sprawdź ofertę</button>
              <button className='button button-transparent'>Portfolio</button>
            </div>
        </div>

        <div className='home__images'>
          <img className='grayVector' src={greyVector} alt="gray vector" />
          <img className='redVector' src={redVector} alt="red vector" />
          <img className='coupleDancing' src={coupleDancing} alt="couple dancing" />
        </div>
      </div>
    </section>
  )
}

export default Home