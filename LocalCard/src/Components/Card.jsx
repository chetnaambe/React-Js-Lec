import React from 'react'

const Card = ({cardData}) => {
  return (
    <div className='card'>
        <div className='upper'>
            <img src={cardData.profile} alt="" />
        </div>

        <div className='lower'>
            <h2>{cardData.username}</h2>
            <h4>{cardData.email}</h4>
            <h3>{cardData.role}</h3>
        </div>
    </div>
  )
}

export default Card