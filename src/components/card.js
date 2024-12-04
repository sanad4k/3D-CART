import React from "react";
import './card.css'
const Card = ({ src , name , price , category , artist}) => {
    // const src = {src}
    return (
        <div className="card">
            <div className="image-container">
                <img className="the_image" alt="project_image" src={src}/>
            </div>
            <div className="text_box">
                <div className="title">{name}</div>
                <div className="category">type: {category}</div>
                <div className="artist">by: {artist}</div>
                <div className="price">{price}</div>
                <br/>   
            </div>
        </div>
        
    )
}
export default Card