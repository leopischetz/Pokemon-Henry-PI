import axios from "axios";
import { getByName } from "../redux/actions";

const createPokemons = async (createDataJson) =>{
    try {
        const response = await axios.post("http://localhost:3001/pokemons/", createDataJson, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert(`El pokémon ha sido creado exitosamente!`);
    } catch (error) {
        alert("El Pokemon no pudo ser creado correctamente");
    };
};

export default createPokemons;


