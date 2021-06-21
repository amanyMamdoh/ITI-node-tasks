const user =require('../models/users')

const create= (data)=>{
    return user.create(data).catch(console.log)
}
const findAll=()=>{
    return user.findAll()
}
const findById=(id)=>{
    return user.findone({where :{id}})
}
const editById=(id,data)=>{
    return user.update(data,{where:{id}})
}
const deleteById=(id,data)=>{
    return user.delete(data,{where:{id}})
}
module.exports={
    create,
    findAll,
    findById,
    editById,
    daleteById,
}