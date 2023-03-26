const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    dbId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true      
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
      min: 1,
      max: 300
      }
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
      min: 1,
      max: 200
      }
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
      min: 1,
      max: 250
      }
    },
    speed:{
      type: DataTypes.INTEGER,
      validate:{
        min:1,
        max:200
      }
    },
    height:{
      type: DataTypes.INTEGER,      
    },
    weight:{
      type: DataTypes.INTEGER,
    }
  },{
    timestamps: false
  });
};
