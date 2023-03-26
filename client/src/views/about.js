import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const About_Page = ()=>{
    const history = useHistory();
    const allPokemones = useSelector((state) => state.allPokemons);
    console.log(allPokemones);

    return(
        <div>
            <h1>Soy el About</h1>
            <button onClick={() => history.goBack()}>Volver al Home</button>
        </div>       
    )
}

export default About_Page;