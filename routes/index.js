const express = require("express");
const router =express.Router()

 const todosRouter= require('./todos')
router.use('/todos'.todosRouter)

const usersRouter= require('./users')
router.use('/todos'.usersRouter)

module.exports=router