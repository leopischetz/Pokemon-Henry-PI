const initialGet = require('./initialGet');
const getPokemonsDb = require('./getPokemonsDb');

const getPokemons = async (req, res)=>{
    try {
        const pokemonDb = await getPokemonsDb();
        const pokemonApi = await initialGet();
        const allPokemons = pokemonDb.concat(pokemonApi);

        return res.status(200).json(allPokemons);

    } catch (error) {
        return res.status(400).send(error.message);
    }
}

module.exports = getPokemons;