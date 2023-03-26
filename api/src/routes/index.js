const { Router } = require('express');
const getPokemons = require('../controllers/getPokemons');
const getPokemonById = require('../controllers/getPokemonById');
const getTypes = require('../controllers/getTypes');
const getPokemonByName = require('../controllers/getPokemonByName');
const createPokemon = require('../controllers/createPokemon');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


routes.get('/name', getPokemonByName);
routes.get('/types', getTypes);
routes.get('/:idPokemon', getPokemonById);
routes.get('/', getPokemons);

routes.post('/', createPokemon);

module.exports = routes;
