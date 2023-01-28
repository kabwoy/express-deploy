const { DataTypes } = require("sequelize")
const sequelize = require("../db/conn")

module.exports = sequelize.define('post' , {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    }
})