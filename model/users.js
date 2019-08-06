const mongoose=require('mongoose')
const Schema=mongoose.Schema

const usersSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    avator:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    identification:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
})

mongoose.model('users',usersSchema)