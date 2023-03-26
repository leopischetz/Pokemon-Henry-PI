const axios = require('axios');
const { Pokemon, Type } = require('../db');
const URL = "https://pokeapi.co/api/v2/pokemon/";
const { v4: uuidv4 } = require('uuid');

const getPokemonById = async (req, res)=>{
    const { idPokemon } = req.params;
    try {
        const pokemonDb = await Pokemon.findOne({ where: { id: idPokemon }, include: Type });

    if (pokemonDb) {
      const resolvedTypes = pokemonDb.Types.map(type => type.name);
      const pokemonById = {
        dbId: pokemonDb.id,
        id: pokemonDb.apiId,
        name: pokemonDb.name,
        image: pokemonDb.image,
        hp: pokemonDb.hp,
        attack: pokemonDb.attack,
        defense: pokemonDb.defense,
        speed: pokemonDb.speed,
        height: pokemonDb.height,
        weight: pokemonDb.weight,
        types: resolvedTypes 
      };
      return res.status(200).json(pokemonById);
    } else {
      const response = await axios.get(`${URL}${idPokemon}`);

      if (response.status !== 200) {
        throw new Error(`No se encuentra un Pokemon con el ID "${idPokemon}"`);
      };
      
      const data = response.data;

      const resolvedTypes = data.types.map(type => type.type.name);


      const pokemonById = {
        id: data.id,
        name: data.species.name,
        image: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types: resolvedTypes
      };

      return res.status(200).json(pokemonById);
      
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

}

module.exports = getPokemonById;