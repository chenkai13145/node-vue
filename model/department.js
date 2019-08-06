const mongoose=require('mongoose')
const Schema=mongoose.Schema

const departmentSchema=new Schema({
     
    subunit:{
        type:String,
        required:true
    },  
    principal:{
        type:String,
        required:true
    },
    personcount:{
        type:String,
       
    },
    statu:{
        type:String,
        required:true
    },
    children:[
        {
            number:{
                type:Number,
                required:true
            } ,
            name:{
                type:String,
                required:true
            },
           
            job:{
                type:String,
                required:true
            },
            tel:{
                type:String,
                required:true
            },
            email:{
                type:String
            }
        }
    ]
})

mongoose.model('department',departmentSchema)