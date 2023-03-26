const axios = require('axios');
const { Pokemon, Type } = require('../db');
const URL = "https://pokeapi.co/api/v2/pokemon/";
const { v4: uuidv4 } = require('uuid');


const createPokemon = async (req, res)=>{
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;
    if(!name || !image || !hp || !attack || !defense || !types){
        return res.status(404).send("Falta enviar datos obligatorios");
    }; 
    
    try {
        const response = await axios.get(`${URL}${name}`);
        return res.status(404).send(`Ya existe un Pokemon original con el nombre ${name}`);        
    } catch (error) {
        try {                 
            let id=1282;
            let condition= true;
    
            while(condition){
                let pokemonDb = await Pokemon.findOne({ where: { id: id }});
                if(pokemonDb){
                    id++;                
                } else{
                    condition = false;
                }
            };
    
            const tipos = types.map(async (tipo) =>{
            const createdType = await Type.findOrCreate({
                where: { name: tipo }
            });
            return createdType[0];
            });
    
            const resolvedTypes = await Promise.all(tipos);
    
            if (!resolvedTypes) {
                return res.status(404).send("Uno o más tipos provistos no existen en la base de datos");
              }
    
            const newPokemon = await Pokemon.create({
                dbId: uuidv4(),
                id: id,
                name,
                image,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,            
            });
    
            await newPokemon.addTypes(resolvedTypes);
    
            return res.status(201).json(newPokemon);
            
        } catch (error) {
            res.status(404).json({ error: error.message});
        } 
    }       
}

module.exports = createPokemon;

