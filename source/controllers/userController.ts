import {Request,response,Response} from "express"
import UserModel  from "../models/Users"


let addUser=async(req:Request,res:Response):Promise<object>=>{
    try{
        let data=new UserModel(req.body)
        await data.save()
        return res.status(200).json({status:true,message:"User Added Successfully"})
    }catch(error:any){
        return res.status(500).json({status:false,message:error.message})
    }
    
}

let getUsers=async(req:Request,res:Response):Promise<object>=>{
    try{
        let users=await UserModel.find({})
        return res.status(200).json({status:true,data:users})
    }catch(error:any){
        return res.status(500).json({status:false,message:error.message})
    }
}

let updateUser=async(req:Request,res:Response):Promise<object>=>{
    try{
        const {userId}=req.params
        await UserModel.findOneAndUpdate({_id:userId},{$set:req.body})
        return res.status(200).json({status:true,message:"User Updated"})
    }catch(error:any){
        return res.status(500).json({status:false,message:error.message})
    }
}

let deleteuser=async(req:Request,res:Response):Promise<object>=>{
    try{
        const {userId}=req.params
        await UserModel.findOneAndDelete({_id:userId})
        return res.status(200).json({status:true,message:"User Deleted"})
    }catch(error:any){
        return res.status(500).json({status:false,message:error.message})
    }
}

export{addUser,getUsers,updateUser,deleteuser}