const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    dbId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.ENUM("normal", "fighting","flying","poison","ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"),
      allowNull: false,
      unique: true
    },
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
        min:1,
        max:20
      }      
    }  
  },{
    timestamps: false
  });
};
