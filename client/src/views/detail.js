import "./detail.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { getDetail, clearDetail } from "../redux/actions";

const Detail_Page = ()=>{
    const dispatch = useDispatch();    
    const { id } = useParams();
    const history = useHistory();
    
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
          <div>
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
          <div className="button-back">
            <button onClick={() => history.goBack()}>Volver al Home</button>  
          </div> 
        </div>       
    );
};

export default Detail_Page;