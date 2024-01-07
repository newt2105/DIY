const Sequelize = require('sequelize')

const sequelize = new Sequelize('nam', 'root', '1507',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize
