const mangoose=require("mangoose")
mangoose.connect("mangodb://localhost:27017/LoginSignUpTutorial").then(()=>{
    console.log("mangodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})
const LongInSchema-new mangoose.Schema({
    name:{
        type: String,
        required:true
    }
    passward:{
        type: String,
        required:true
    }
})