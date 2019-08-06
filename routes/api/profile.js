const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const passport=require('passport')

//加载model
require('../../model/profile')
const Profile=mongoose.model('profile')

//$router POST api/profile/add
//@desc  创建信息接口
//private
router.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const newProfile={};
    if(req.body.type) newProfile.type=req.body.type;
    if(req.body.desribe) newProfile.desribe=req.body.desribe;
    if(req.body.output) newProfile.output=req.body.output;
    if(req.body.input) newProfile.input=req.body.input;
    if(req.body.remark) newProfile.remark=req.body.remark;
    if(req.body.cash) newProfile.cash=req.body.cash;
    new Profile(newProfile).save().then(pro=>{
         res.json({success:true,msg:"添加成功"})
     })
})


//$router GET api/profile/all
//@desc  获取所有信息
//private
router.get('/all',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Profile.find({})
           .then(pro=>{
               if(!pro){
                    return res.status(400).json('没有任何内容')
               }
               res.json(pro)
           })
           .catch(err=>res.json(err))
})


//$router GET api/profile/:id
//@desc  获取单个信息
//private
router.get('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Profile.findById(req.params.id)
           .then(pro=>{
               if(!pro){
                    return res.json('没有任何内容')
               }
               res.json(pro)
           })
           .catch(err=>res.status(404).json(err))
})


//$router POST api/profile/edit/:id
//@desc  编辑信息接口
//private
router.post('/edit/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const newProfile={};
    if(req.body.type) newProfile.type=req.body.type;
    if(req.body.desribe) newProfile.desribe=req.body.desribe;
    if(req.body.output) newProfile.output=req.body.output;
    if(req.body.input) newProfile.input=req.body.input;
    if(req.body.remark) newProfile.remark=req.body.remark;
    if(req.body.cash) newProfile.cash=req.body.cash;
    Profile.findByIdAndUpdate({_id:req.params.id},{$set:newProfile},{new:true})
           .then(pro=>{
               if(!pro){
                    return res.json('没有任何内容')
               }

               res.json({msg:"数据修改成功！",success:true})
           })
           .catch(err=>res.json(err))
})


//$router DELETE api/profile/del/:id
//@desc  删除单个信息
//private
router.delete('/del/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Profile.findByIdAndRemove({_id:req.params.id})
           .then(pro=>{
                pro.save()
                   .then(prodel=>{
                       res.json({msg:"删除成功",success:true})
                   })
                   .catch(err=>res.json({msg:"删除失败",success:false}))
           })
           .catch(err=>res.status(404).json(err))
})



module.exports=router
