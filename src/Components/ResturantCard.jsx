import React from 'react'
import './ResturantCard.css'

const ResturantCard = ({resList}) => {


  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resList?.data;

  return (
    <div className='card'>
         <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="biriyani"/>
         <h2>{name}</h2>
         <h5 style={{margin:"5px"}}>{cuisines.join(', ')} </h5>
         <h4 style={{margin:"5px"}}>{avgRating}</h4>
         <h4 style={{margin:"5px"}}>₹{costForTwo/100} FOR TWO</h4>
         <h5 style={{margin:"5px"}}>Delivery in {deliveryTime} min</h5>
    </div>
  )
}

export default ResturantCard