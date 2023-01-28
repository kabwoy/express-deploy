const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({username:process.env.DB_USERNAME , database:process.env.DATABASE , password:process.env.DB_PASSWORD , dialect:'mysql' , host:'localhost'})
module.exports = sequelize