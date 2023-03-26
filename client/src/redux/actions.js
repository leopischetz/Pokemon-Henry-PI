import axios from "axios";
import { GET_CHARACTER, ERROR, GET_DETAIL, CLEAR_DETAIL ,SET_PAGINA, GET_BY_NAME, GET_TYPES } from "./actionTypes";

export function getPokemons(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/pokemons/");            
            const pokemonBuscado = JSON.parse(localStorage.getItem("resultadosBusqueda")) || [];
            // console.log("pokemonBuscado", pokemonBuscado); 
            // console.log("response.data", response.data);
            return dispatch({
                type: GET_CHARACTER,
                payload: [...response.data, ...pokemonBuscado]
            });
        } catch (error) {
            console.log(error);
            return dispatch({
                type: ERROR,
                payload: error.response.data,
            });
        };
    };
};

export function getDetail(id){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            });            
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.response.data,
            }); 
        };
    };
};

export function clearDetail(){
    return {
        type: CLEAR_DETAIL,
        payload: [],
      };
}

export function setPagina(paginaActual){
    return {
      type: SET_PAGINA,
      payload: paginaActual
    }
  };

export function getByName(nombre){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/name?name=${nombre}`);
            const pokemonBuscado = response.data;
            // console.log("getbyname", pokemonBuscado); 
            let resultados = JSON.parse(localStorage.getItem("resultadosBusqueda")) || [];
            resultados.push(pokemonBuscado);
            // console.log("resultados", resultados);           
            localStorage.setItem("resultadosBusqueda", JSON.stringify(resultados));
            return dispatch({
                type: GET_BY_NAME,
                payload: pokemonBuscado
            })
        } catch (error) {           
            return dispatch({
                type: ERROR,
                payload: error.response.data,
            });
        }
    };
};

export function getTypes(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/pokemons/types");
            return dispatch({
                type: GET_TYPES,
                payload: response.data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.response.data,
            });
        };
    };
};


