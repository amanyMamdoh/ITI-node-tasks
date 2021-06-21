const todo =require('../models/todos')

const create= (data)=>{
    return todo.create(data).catch(console.log)
}
const findAll=()=>{
    return todo.findAll()
}
const findById=(id)=>{
    return todo.findone({where :{id}})
}
const editById=(id,data)=>{
    return todo.update(data,{where:{id}})
}
const deleteById=(id,data)=>{
    return todo.delete(data,{where:{id}})
}
module.exports={
    create,
    findAll,
    findById,
    editById,
    daleteById,
}