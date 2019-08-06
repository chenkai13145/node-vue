const express = require('express')
const app = express.Router()
const mongoose = require('mongoose')
const passpart = require('passport')
//映入model
require('../../model/department')
const Department = mongoose.model('department')


app.get('/', (req, res) => {
    res.send("你还在坚持不懈")
})

//$router POST api/department/add
//@desc  添加部门管理信息
//private
app.post('/add', passpart.authenticate('jwt', { session: false }), (req, res) => {
    Department.findOne({ subunit: req.body.subunit })
        .then(data => {
            if (data) {
                return res.json({ msg: "部门名称不能重复", success: true })
            }
            const newdepart = {
                subunit: req.body.subunit,
                principal: req.body.principal,
                personcount: '0',
                statu: '1'
            }
            new Department(newdepart)
                .save()
                .then(data => {
                    res.json({ msg: "添加成功", success: true })
                })
                .catch(err => { res.json({ msg: "添加失败", success: false }) })
        })
        .catch(err => res.json(err))

})


//$router GET  api/department/all
//@desc 获取所有部门信息
//private
app.get('/all', passpart.authenticate('jwt', { session: false }), (req, res) => {
    Department.find({})
        .then(data => {
            if (!data) {
                return res.json({ msg: "还没有任何管理信息" })
            }
            res.json(data)
        })
        .catch(err => { res.json({ msg: "获取异常", success: false }) })

})


//$router PUT  api/department/edit/:id
//@desc 修改单个部门信息
//private
app.put('/eidt/:id', passpart.authenticate('jwt', { session: false }), (req, res) => {
    const newdeparts = {
        subunit: req.body.subunit,
        principal: req.body.principal,
        personcount: req.body.personcount,
        statu: req.body.statu
    }
    Department.findByIdAndUpdate({ _id: req.params.id }, { $set: newdeparts }, { new: true })
        .then(data => {
            res.json({msg:"编辑成功",success:true})
        })
        .catch(err => { console.log(err) })
})


//$router DELETE  api/department/del/:id
//@desc 删除单个部门信息
//private
app.delete('/del/:id',passpart.authenticate('jwt',{session:false}),(req,res)=>{
    Department
              
})



//$router GET api/department/:id
//@desc 单个部门信息
//private
app.get('/:id',passpart.authenticate('jwt',{session:false}),(req,res)=>{
      Department.findById(req.params.id)
                .then(data=>{
                    if(!data){
                        return res.json({success:false,msg:"没有该部门信息"})
                    }
                    res.json(data)
                })        
})

//===========================================================================




//$router POST  api/department/children/:id
//@desc 添加单个部门children信息
//private
app.post('/children/:id',passpart.authenticate('jwt',{session:false}), (req, res) => {
    Department.findById(req.params.id)
        .then(data => {
            if (!data) {
                return res.json({ msg: "添加异常", success: false })
            }
            //查看添加的员工信息是否重复
            let off = data.children.every(item => {
                return item.number != req.body.number
            })
            if (!off) {
                return res.json({ success: true, msg: "该员工编码已被使用" })
            }
            const newchildren = {}
            if (req.body.number) newchildren.number = req.body.number
            if (req.body.name) newchildren.name = req.body.name
            if (req.body.job) newchildren.job = req.body.job
            if (req.body.tel) newchildren.tel = req.body.tel
            if (req.body.email) newchildren.email = req.body.email
            data.children.unshift(newchildren)
            new Department(data)
                .save()
                .then(child => {
                    return res.json({ success: true, msg: "添加成功" })
                })
                .catch(err => { res.json(err) })
        })
})



//$router GET  api/department/children/:id/:child_id
//@desc 查看单个部门children中员工个人信息
//private
app.get('/children/:id/:child_number',passpart.authenticate('jwt',{session:false}), (req, res) => {
    Department.findById(req.params.id)
        .then(child => {
            if (!child) {
                return res.json({ msg: "没找到部门信息", success: false })
            }
            let event = child.children.find(item => {
                return item.number == req.params.child_number
            })
            if (!event) {
                return res.json({ msg: "出现异常", success: false })
            }
            let person = {
                statu: child.statu,
                principal: child.principal
            }
            res.json({ person, childrens: event })
        })
        .catch(err => console.log(err))
})


//$router PUT  api/department/children/:id/:child_number
//@desc 编辑单个部门children中员工个人信息
//private
app.put('/children/:id/:child_number',passpart.authenticate('jwt',{session:false}), (req, res) => {
    Department.findById(req.params.id)
        .then(child => {
            if (!child) {
                return res.json({ msg: "没找到部门信息", success: false })
            }
            let event = child.children.some((item, index) => {
                if (item._id== req.params.child_number) {
                    child.children.splice(index, 1)
                    return true
                }
            })
            if (!event) {
                return res.json({ msg: "出现异常", success: false })
            }
            //判断员工编码是否被占用
            let numOff = child.children.every(items => {
                return items.number != req.body.number
            })
            if (!numOff) {
                return res.json({ msg: "员工编号已被使用", success: false })
            }

            //处理编辑内容
            let bodys = req.body
            let newchildrens = {}
            for (let key in bodys) {
                newchildrens[key] = bodys[key]
            }
            child.children.unshift(newchildrens)
            //保存编辑内容
            Department.findByIdAndUpdate({ _id: req.params.id }, { $set: child }, { new: true })
                .then(data => {
                    return res.json({ msg: "编辑成功", success: true })
                })
                .catch(err => { return res.json({ msg: "编辑失败", success: false }) })

        })
        .catch(err => { return res.json({ msg: "编辑异常", success: false }) })
})


//$router DELETE  api/department/children/:id/:child_number
//@desc 删除单个部门children中员工个人信息
//private
app.delete('/children/:id/:child_number',passpart.authenticate('jwt',{session:false}), (req, res) => {
    Department.findById(req.params.id)
        .then(child => {
            if (!child) {
                return res.json({ msg: "没找到部门信息", success: false })
            }
            let num = child.children.findIndex(item => {
                return item.number == req.params.child_number
            })
            child.children.splice(num, 1)
            Department.findByIdAndUpdate({_id:req.params.id},{$set:child},{new:true})
                      .then(data=>{
                          return res.json({ msg: "删除成功", success: true })
                      })
                      .catch(err => { return res.json({ msg: "删除失败", success: false }) })
                      
        })
        .catch(err => { return res.json({ msg: "删除异常", success: false }) })
})


module.exports = app
