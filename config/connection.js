const Sequelize = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(
    process.env.DB || 'card_db',
    process.env.USER,
    process.env.PW,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
)

module.exports = sequelize