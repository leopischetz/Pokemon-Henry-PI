const { Type } = require('../db');

const getTypes = async (req, res) =>{
    try {
        const allTypes = await Type.findAll();
        if(!allTypes)  throw new Error('No hay Tipos de Pokemons en la base de datos');

        return res.status(200).json(allTypes);
        
    } catch (error) {
        return res.status(400).send(error.message);
    };
};

module.exports = getTypes;
