import mongoose,{connect} from "mongoose"


let connects=()=>{
    return connect("mongodb://localhost:27017/tsDB")
    .then(()=>{console.log("DB connected")})
    .catch(error=>{console.log(error);
    });
    
}

export default connects
