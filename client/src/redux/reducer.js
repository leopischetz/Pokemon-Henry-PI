import { GET_CHARACTER, ERROR, GET_DETAIL, CLEAR_DETAIL ,SET_PAGINA, GET_BY_NAME, GET_TYPES } from "./actionTypes";
  
  const initialState = {
      allPokemons: [],
      details: [],
      pokemonBuscado: [],
      ultimoBuscado: [],
      errors: {},
      pagina: null,
      types: [], 
  }; 

  export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case GET_CHARACTER:
        return {
          ...state,
          allPokemons: state.allPokemons.length === 0 ? payload : [...state.allPokemons],
          errors: {}
        };
      case GET_DETAIL:
        return {
          ...state,
          details: payload,
          errors: {},
        };
      case CLEAR_DETAIL:
        return{
          ...state,
          details: payload
        };
      case SET_PAGINA:
        return {
          ...state,
          pagina: payload,
          errors: {},
        };
      case ERROR:
        return {
          ...state,
          errors: payload,
        };
      case GET_BY_NAME:
        return{
          ...state,
          allPokemons: [...state.allPokemons, payload],
          pokemonBuscado: [...state.pokemonBuscado, payload],
          ultimoBuscado: [payload],
          errors: {},
        };   
      case GET_TYPES:
        return {
          ...state,
          types: payload,
          errors: {},
        };
      default:
        return { ...state };
    };
  }