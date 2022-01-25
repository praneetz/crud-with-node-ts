import express,{Request,Response} from "express"
import {addUser,getUsers,updateUser,deleteuser} from "../controllers/userController"
let router=express.Router()

router.post("/add",addUser)
router.get("/get",getUsers)
router.put("/update/:userId",updateUser)
router.put("/delete/:userId",deleteuser)


module.exports=router