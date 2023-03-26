import Card from "./Card";
import React from 'react';


export default function CardContainer({ pokemons }) {   
    const renderizedIds = new Set();

    return (
      <div className="div-card">
      
        {pokemons.map(({ id, name, image, types }) => {
          
          if (renderizedIds.has(id)) {
            return null;
          }
           
          renderizedIds.add(id);
  
          return (
            <Card
              key={id}
              id={id}
              name={name}              
              image={image}
              types = {types}
              className="card"
            />           
          );
        })}    
      </div>
    );
 }