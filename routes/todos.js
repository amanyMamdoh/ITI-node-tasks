const express = require("express");
const router =express.Router()
const app = express();
const todo=require('../controllers/todos');
const todos = require("../models/todos");
app.use(express.json())

    router.post('/',(req,res)=>{
        const {body}=req
        todo.create(body)
        res.status(204).end()
    })
    router.get('/',async (req,res)=>{
        const alltodos= await todos.findAll()
        res.json(alltodos)
     })
     router.get('/:id',async (req,res)=>{
          const {id}=req.params
          const todo=await todo.findById(id)
          if(!todo){
               res.status(404).end()
               return
          }
     })
     router.patch("/todos/:id", async (req, res) => {
           const {body,params:{id}}=req
           await todo.editById(id,body)
           res.status(204).end()
        }
     )
     router.delete("/todos/:id", async(req, res) => {
             const {id}=req.params
             await todo.daleteById(id)
             res.status(203).end()
       });

module.exports=router

app.listen(3000);