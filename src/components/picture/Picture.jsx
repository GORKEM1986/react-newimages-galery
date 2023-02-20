import React from 'react'
import "./Picture.scss"


const Picture = ({src, photographer}) => {
  return (
    <div className='picture'>
        <img className='img' src={src} alt="img" />
        <h2>{photographer} </h2>
    </div>
  )
}

export default Picture