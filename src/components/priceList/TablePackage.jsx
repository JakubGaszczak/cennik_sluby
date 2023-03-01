import React from 'react'
import TableData from './TableData'

function TablePackage() {
  return (
    <>
        {TableData.map(item => {
            return (
                <div 
                    key={item.id}
                    className={`${item.id === 1 ? "column column-1" : ""} 
                    ${item.id === 2 ? "column column-2" : ""}
                    ${item.id === 3 ? "column column-3" : ""}
                    ${item.id === 4 ? "column column-4" : ""}`}>
                <p>Pakiet &nbsp;<span>{item.name}</span></p>
                <p>{item.option_1}</p>
                <p>{item.option_2}</p>
                <p>{item.option_3}</p>
                <p><span>do {item.music_video_time}</span></p>
                <p><span>do {item.movie_time}</span></p>
                <p>{item.option_4}</p>
                <p>{item.option_5}</p>
                <p><span>{item.price} PLN</span></p>
            </div>
            )
        })}
    </>
  )
}

export default TablePackage