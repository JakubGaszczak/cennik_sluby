import React from 'react'
import PackageData from './PackageData'

function PackageComponent() {
  return (
    <>
        {PackageData.map(item => {
           return (
             <div key={item.id} className={item.id % 2 === 0 ? "packages__package row-reverse" : "packages__package"}>
                <img className='packages__package__img' src={item.img} alt={item.title} />
                <div className="packages__package__content">

                    <div className="packages__package__subtitle">
                    Pakiet <span>{item.subtitle}</span></div>
                    
                    <h3 className='packages__package__title'>{item.title}</h3>

                    <p className='packages__package__description'>{item.description}</p>

                    <ul className='packages__package__offers'>
                        {item.offer.map((offer, index) => {
                            return (
                                <li key={index} className='packages__package__offer'>
                                    {offer}
                                </li>
                            )
                        })}
                    </ul>

                    <div className='packages__package__cost'>
                        <button className='packages__package__button'>
                            <i className="fa-solid fa-plus"></i>
                            wybieram
                        </button>
                        <div className='packages__package__price'>{item.price} PLN</div>
                    </div>
                </div>
            </div>
           )
        })}
    </>
  )
}

export default PackageComponent
