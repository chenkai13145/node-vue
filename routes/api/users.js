const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const gravatar=require('gravatar')
const jwt=require('jsonwebtoken')
const key=require('../../config/key')
const passport=require('passport')

//加载model
require('../../model/users')
const Users=mongoose.model('users')

//加载注册用户信息验证方法
const validatorRegistorInput=require('../../validators/users/register');


//$rouetr  POST api/users/register
//@desc    注册信息
//public
router.post('/register',(req,res)=>{
    const {errors,isValid}=validatorRegistorInput(req.body);
    if(!isValid){
        return res.json(errors)
    }
    
    Users.findOne({email:req.body.email})
         .then(user=>{
             if(user){
                 return res.json({msg:"邮箱已被注册",success:false})
             }
             var avator = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
             const newUsers={
                 name:req.body.name,
                 password:req.body.password,
                 email:req.body.email,
                 avator,
                 identification:req.body.identification
             }
             //加密
             bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if(err)throw err;
                    newUsers.password=hash
                    new Users(newUsers)
                        .save()
                        .then(user=>res.json({msg:"注册成功",success:true}))
                        .catch(err=>res.json({msg:"注册失败",success:false}))
                });
            });

         })
})


//$rouetr  POST api/users/login
//@desc    登录信息
//public
router.post('/login',(req,res)=>{
    // const {errors,isValid}=validatorRegistorInput(req.body);
    // if(!isValid){
    //     return res.json(errors)
    // }
    Users.findOne({email:req.body.email})
         .then(user=>{
             if(!user){
                 return res.json({msg:"邮箱不存在！",success:false})
             }
             //密码匹配
             bcrypt.compare(req.body.password, user.password).then((ress) => {
                if(!ress){
                    return res.json({msg:"密码错误！",success:false})
                }
                const rule={
                    id:user.id,
                    name:user.name,
                    identification:user.identification,
                    avator:user.avator
                };
                jwt.sign(rule, key.keys, { expiresIn:3600 },(err, token)=>{
                    if(err) throw err;  
                    res.json({
                           token:"Bearer "+token,
                           success:true,
                           msg:"登录成功"
                         })
                });
            });

         })
})



//$rouetr  PUT api/users/put/:id
//@desc    修改个人信息
//private
router.put('/put/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    // const {errors,isValid}=validatorRegistorInput(req.body);
    // if(!isValid){
    //     return res.json(errors)
    // }
 
    Users.findById(req.params.id)
         .then(user=>{
             if(!user){
                 return res.json({msg:"不存在！",success:false})
             }
             const newUser={
                 name:req.body.name,
                 password:req.body.password
             }
              //加密
              bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    if(err) throw err;
                       newUser.password=hash
                      for(let key in newUser){
                             user[key]=newUser[key]
                      }
                     Users.findByIdAndUpdate({_id:req.params.id},{$set:user},{new:true})
                                 .then(use=>{
                                     res.json({msg:"个人信息修改成功,请重新登录！",success:true})
                                 })
                                 .catch(err=>res.json({msg:"个人信息修改失败",success:false}))
                         
                })
               })

               
           

         })
})



// router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
//     res.json(req.user)
// })
module.exports=router