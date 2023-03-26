const axios = require('axios');
const { Pokemon, Type } = require('../db');
const URL = "https://pokeapi.co/api/v2/pokemon/";


const getPokemonByName = async (req, res) =>{
    const name= req.query.name;
    const nombre = name ? name.toLowerCase() : null;
    try {
        const pokemonDb = await Pokemon.findOne({ where: { name: nombre }, include: Type });

        if(pokemonDb){
            return res.status(200).json(pokemonDb);
        } else{
            const response = await axios.get(`${URL}${nombre}`);

            if(response.error){
                throw new Error(`No se encuentra un Pokemon con el nombre ${name}`);
            };

            const data = response.data;

            const resolvedTypes = data.types.map(type => type.type.name);

            const pokemonByName = {
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

            return res.status(200).json(pokemonByName);
        }
    } catch (error) {
       return res.status(500).send(`No se encuentra un Pokemon con el nombre ${name}`); 
    }
};

module.exports = getPokemonByName;