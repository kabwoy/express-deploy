const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({username:process.env.DB_USERNAME , database:process.env.DATABASE , password:process.env.DB_PASSWORD , dialect:'mysql' , host:process.env.DB_HOST})
module.exports = sequelize