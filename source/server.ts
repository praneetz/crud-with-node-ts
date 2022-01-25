import express, {Request,Response}from "express"
const app=express()
import connects from "./utils/db"

connects()

app.use(express.json())
app.use("/",require("./routers"))


app.listen(8080,()=>{console.log("Port is running at 8080")})