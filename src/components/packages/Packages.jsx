import React from 'react'
import "../../css/packages.css"
import PackageComponent from './PackageComponent'

function Packages() {
  return (
    <section className='packages section' id='packages'>
        <div className='packages__container container'>
            
            <PackageComponent />

        </div>
    </section>
  )
}

export default Packages