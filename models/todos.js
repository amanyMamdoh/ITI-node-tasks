const {datatype} = require('sequelize')
const sequelize=require('../db')
const users = require('./users')

const todos=sequelize.define('todos',{
    content:{
        type:datatype.STRING
    }
})
todos.belongsTo(users)
todos.sync({})
module.exports=todos