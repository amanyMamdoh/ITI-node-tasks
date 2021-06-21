const express = require("express");
const router =express.Router()
const app = express();
const user=require('../controllers/users');
const users = require("../models/users");
app.use(express.json())

    router.post ('/',async (req,res)=>{
        const {body}=req
        await user.create(body)
        res.status(204).end()
    })
    router.get('/',async (req,res)=>{
        const allusers= await users.findAll()
        res.json(allusers)
     })
     router.get('/:id',async (req,res)=>{
          const {id}=req.params
          const user=await user.findById(id)
          if(!user){
               res.status(404).end()
               return
          }
     })
     router.patch("/users/:id", async (req, res) => {
           const {body,params:{id}}=req
           await user.editById(id,body)
           res.status(204).end()
        }
     )
     router.delete("/users/:id", async(req, res) => {
             const {id}=req.params
             await user.daleteById(id)
             res.status(203).end()
       });

module.exports=router

app.listen(3000);