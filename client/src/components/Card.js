import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, types, id }) {

    const typeClass = `${types[0]}`;
    
    return (
        <div key={id} className={`card-container ${typeClass}`} >
           <h2>{name}</h2> 
           <Link to={`/detail/${id}`}>                                   
           <img  src={image} alt={name} />
           </Link> 
           <div className="types-container">
               {types.map((type, index) => (
                   <span key={index} className={`type-${type}`}>{type}</span>
               ))}
           </div>                 
         </div>  
     );
  }