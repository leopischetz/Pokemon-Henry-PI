const axios = require('axios');
const { Pokemon, Type } = require('../db');

const URL = "https://pokeapi.co/api/v2/pokemon/";

const getApiData = async () => {
    try {
      let i = 1;
      let pokemones = [];
  
      while (i < 66) {
        const apiData = await axios.get(`${URL}${i}`);
        pokemones.push(apiData);
        i++;
      }
  
      const allPokemones = await Promise.all(
        pokemones.map(async (res) => {
          const pokemon = {
            id: res.data.id,
            name: res.data.species.name,
            image: res.data.sprites.front_default,
            hp: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed: res.data.stats[5].base_stat,
            height: res.data.height,
            weight: res.data.weight,
            types: res.data.types.map(({ type }) => type.name),
          };
          return pokemon;
        })
      );
  
      return allPokemones;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };

const initialGet = async () => {
    try {
        return await getApiData();
    } catch (error) {
        return {error:error.message}
    };
};


module.exports = initialGet;
