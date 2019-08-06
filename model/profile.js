const mongoose=require('mongoose')
const SChema=mongoose.Schema

const profileSchema=new SChema({
      type:{
          type:String
      },
      output:{
        type:String,
        required:true
      },
      input:{
        type:String,
        required:true
      },
      cash:{
        type:String,
        required:true
      },
      desribe:{
        type:String,
        required:true
      },
      remark:{
        type:String,
      
      },
      date:{
          type:Date,
          default:Date.now
      }

})
mongoose.model('profile',profileSchema)