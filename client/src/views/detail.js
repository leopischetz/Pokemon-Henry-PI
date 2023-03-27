import "./detail.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getDetail, clearDetail } from "../redux/actions";

const Detail_Page = ()=>{
    const dispatch = useDispatch();    
    const { id } = useParams();
    const navigate = useNavigate();
    
      useEffect(() => {
        dispatch(getDetail(id));
        return () => {
          dispatch(clearDetail());
        };
      }, [dispatch, id]);
    
      const pokemonDetail = useSelector((state) => state.details);
       
    const { name, image, hp, attack, defense, speed, weight, height, types } = pokemonDetail;
   
    return(
        <div className="detail">
          <div className="pantalla-grande">
            <img className="pokedex" src="/pokedex.png" alt="pokedex" />
            <img className="imagen-detail" src={image} alt={name} />
            <div className="texto" >
            <h1>{name}</h1>
            <div>
               {types && types.map((type, index) => (
               <h3 key={index} >Tipo: {type}</h3>
               ))}
            </div>
            <h3>Hp: {hp}</h3>
            <h3>Ataque: {attack}</h3>
            <h3>Defensa: {defense}</h3>
            <h3>Velocidad: {speed}</h3>
            <h3>Peso: {weight}</h3>
            <h3>Altura: {height}</h3>
            </div>
          </div>
          <div className="pantalla-chica">
            <img classname="pantalla-pokedex" src="/pokedex-pantalla.png" alt="pokedex-mitad" />
            <img className="imagen-detail" src={image} alt={name} />
            <img className="media-pokedex" src="/pokedex-verde.png" alt="pokedex" />
            <div className="texto-dos">
            <h1>{name}</h1>
            <div>
               {types && types.map((type, index) => (
               <h3 key={index} >Tipo: {type}</h3>
               ))}
            </div>
            <h3>Hp: {hp}</h3>
            <h3>Ataque: {attack}</h3>
            <h3>Defensa: {defense}</h3>
            <h3>Velocidad: {speed}</h3>
            <h3>Peso: {weight}</h3>
            <h3>Altura: {height}</h3>
            </div>
          </div>
          <div className="button-back">
            <button onClick={() => navigate('/home')}>Volver al Home</button>  
          </div> 
        </div>       
    );
};

export default Detail_Page;