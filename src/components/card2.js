import React from "react";
import './card2.css'

const Card2 = ({ image, name, category, artist, price }) => {
    console.log({ image, name, category, artist, price });
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
        <p className="card-category">{category}</p>
        <p className="card-artist">Artist: {artist}</p>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card2;
