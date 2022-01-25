import express,{Request,Response} from "express"
let router=express.Router()


router.use("/user",require("./user"))


module.exports=router