const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', '8500878111', { dialect: 'mysql', host: 'localhost' })

module.exports = sequelize