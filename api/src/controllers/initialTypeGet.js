const axios = require('axios');
const { Type } = require('../db');
const { v4: uuidv4 } = require('uuid');

const URL = "https://pokeapi.co/api/v2/type/";

const getApiData = async ()=>{
    try {
        let i=1;
        let b = 10001;
        let types= [];

        while(i<19){
            const apiData = await axios.get(`${URL}${i}`);
            types.push(apiData);
            i++;
        };

        while(b<10003){
            const apiData = await axios.get(`${URL}${b}`);
            types.push(apiData);
            b++;
        }

        const allTypes = types.map(res => ({
            dbId: uuidv4(),
            id: parseInt(res.data.id),
            name: res.data.name
        }));

        return allTypes;
        
    } catch (error) {
        return {error:error.message};
    }
};

const initialTypeGet = async ()=>{
    try {
        const allTypes = await getApiData();
        await Type.bulkCreate(allTypes);
    } catch (error) {
        return {error:error.message}; 
    }    
};

module.exports ={
    initialTypeGet
}

