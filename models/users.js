const {datatype} = require('sequelize')
const sequelize=require('../db')

const users=sequelize.define('users',{
    content:{
        type:datatype.STRING
    }
})
users.sync({})
module.exports=users