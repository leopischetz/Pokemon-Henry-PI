import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getByName } from "../redux/actions";

export default function SearchBar() {

    const dispatch = useDispatch();
    const [pokemonByName, setPokemonByName] = useState("");
       
    const onSearch = ()=>{
        dispatch(getByName(pokemonByName));
        setPokemonByName("");
    };   

   const handleChange = (event) =>{
      setPokemonByName(event.target.value)
   };

   const handleKeyPress = (event) => {
      if (event.keyCode === 13) {
          onSearch(pokemonByName);
      }
   };
   
   return (  
      <div className="searchbar">
      <input className="input" type='search' value={pokemonByName} onChange={handleChange} onKeyDown={handleKeyPress} />
      <button className="boton" onClick={() => onSearch(pokemonByName)}>Buscar</button>
      </div>
   );
}