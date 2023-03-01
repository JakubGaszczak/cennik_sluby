import React from 'react'
import "../../css/aboutUs.css"
import certificate from "../../assets/certificate.png"
import weddingPhoto from "../../assets/weddingPhoto.png"

function AboutUs() {
  return (
    <section className='aboutUs section' id='about'>
        <div className='aboutUs__container container'>

            <div className="aboutUs__top">

              <h1 className='aboutUs__top__title'>
                Jesteście tu nie z przypadku!
              </h1>
              
              <div className="aboutUs__top__content flex">
                <p className='aboutUs__top__text'>
                  Jesteśmy dwójką młodych zapalonych ludzi, którzy codziennie
                  szukają nowych wrażeń i wyzwań czysto kreatywnych. Mamy ogromnie kwalifikacje, doświadczenie i zaangażowane podejście do każdego ze zleceń, które udaje nam się realizować. Przede wszystkim jesteśmy pasjonatami tego co robimy. Stanowimy młody, zgrany zespół, który dorastał wraz z rozwojem świata filmowego, biorąc z niego to co tylko najlepsze. Każdy produkt traktujemy z należytym szacunkiem. Do każdego podchodzimy oryginalnie, nie bagatelizując go. Nasze podejście oznacza, że każda produkcja będzie miała coś czego nie miała poprzednia. Każdy klient jest dla nas na wagę złota, a więc w naszych rękach, każdy poczuje się wyjątkowo.
                </p>
                <div className="aboutUs__top__certificates">
                  <div className='certificates flex'>
                    <img src={certificate} alt="certificate" />
                    <img src={certificate} alt="certificate" />
                    <img src={certificate} alt="certificate" />
                  </div>
                  <button className="aboutUs__top__button button">Opinie naszych klientów</button>
                </div>
              </div>
            </div>

            <div className='aboutUs__bottom flex'>

                <div className='aboutUs__bottom_photo'>
                  <img src={weddingPhoto} alt="wedding photo" />
                </div>

                <div className='aboutUs__bottom__content'>
                  <h4 className='aboutUs__bottom__title'>Wasze wymagania na pierwszym miejscu!</h4>
                  <p className='aboutUs__bottom__text-1'>
                    Zanim przejdziemy do szczegółów, zapraszam serdecznie do zapoznania się z naszym portfolio. Chcemy mieć pewność,że nasze usługi idealnie wpiszą się w motyw tego wielkiego wydarzenia, a jakość naszych usług zagwarantuje wyborną pamiątkę na całe życie.
                  </p>
                  <p className='aboutUs__bottom__text-2'>
                    Mieliśmy okazję, jako studio pracować przy ogromnych produkcjach, kanałach YouTube oraz projektach 🥇 Od 3 lat jednak działamy dodatkowo na powierchnii, jaką są pamiątki okolicznościowe, co daje Państwu jeszcze większą gwarancję unikalności pamiątki. 🎬
                  </p>
                  <span className='aboutUs__bottom__span'>kamerzysta na wesele ·   film ślubny · teledysk ślubny · kamerzysta na ślub ·
                  weselezklasą · reportaż ślubny ·  filmowanie ślubów i wesel · wesele · ślub</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs