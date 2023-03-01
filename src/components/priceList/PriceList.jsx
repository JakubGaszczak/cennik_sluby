import React from 'react'
import "../../css/priceList.css"
import TablePackage from './TablePackage'

function PriceList() {
  return (
    <section className='priceList section' id='priceList'>
        <div className='priceList__container container'>

            <div className='priceList__title flex-center'>
                <h1>oferta ślubna</h1>
                <span className='grey_line'></span>
                <p>2022</p>
            </div>
                
            <div className='priceList__table'>

             <div className='column-options'>
                <p className='cell'>Pakiet &nbsp;<span>filmowy</span></p>
                <p className='cell'>Dwóch operatorów na planie</p>
                <p className='cell'>Minisesja plenerowa w dniu ślubu</p>
                <p className='cell'>Perspektywa z lotu ptaka, użycie drona z śk. UAVO</p>
                <p className='cell'>Teledysk z najlepszych momentów relacji ślubnej</p>
                <p className='cell'>Długi film z całego wydarzenia ślubnego</p>
                <p className='cell'>Drewniany pendrive z plikami + opakowanie</p>
                <p className='cell'>Dyskretna technika filmowania Reccly</p>
                <p className='cell'>Ceny &nbsp;<span>brutto</span>&nbsp; pakietu:</p>
             </div>

             <TablePackage />

            </div>

            <div className='priceList__content flex-center'>
              <p className='priceList__content__text'>
              Wkraczając na rynek serwujemy Państwu naprawdę konkurencyjne stawki, w stosunku do jakości, jaką bronią się nasze realizacje. Jeżeli jest to potrzebne, pomożemy Państwu w zorganizowaniu Waszej pamiątki, pytamy, w jaki sposób chcieliby Państwo, aby została ona uwieczniona, czy np. dłuższe nagranie całego wesela, czy skrót i pamiątka do opublikowania i wysłania znajomym. Jest naprawdę wiele form tego typu pamiątek, a więc o każdą, jeśli chcecie zapytamy i ewentualnie doradzimy, jaką byłoby warto w przypadku Państwa stworzyć 💑.
              </p>

              <h2 className='priceList__content__big-text'>nie znaleźliście idealnej oferty?</h2>
              <button className='priceList__content__button button'>Sprawdź ofertę</button>
            </div>
        </div>
    </section>
  )
}

export default PriceList