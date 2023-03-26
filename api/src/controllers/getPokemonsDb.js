const { Pokemon, Type } = require('../db');

const getPokemonsDb = async () =>{
    try {
        const allPokemonsDb = await Pokemon.findAll({ include: Type });
        const pokemons = allPokemonsDb.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                hp: pokemon.hp,
                attack: pokemon.attack,
                defense: pokemon.defense,
                speed: pokemon.speed,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.Types.map(type => type.name)
            }
        });

        return pokemons; 

    } catch (error) {
        return {error:error.message}
    }
};

module.exports = getPokemonsDb;

