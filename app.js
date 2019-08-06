const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const passport=require('passport')


//导入数据库地址
const db=require('./config/key').mongoURL;
//连接数据库
mongoose.connect(db)
        .then(()=>console.log("Mongoose is success"))
        .catch(err=>console.log(err))

//导入users路由
const users=require('./routes/api/users');
//导入profile路由
const profile=require('./routes/api/profile');
//导入department路由
const department=require('./routes/api/department');


//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//配置passport
app.use(passport.initialize());
require('./config/passport')(passport);

app.get('/',(req,res)=>{
    res.json({msg:"jjjj"})
});

//挂载路由
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/department',department);

//项目经验
//导入car路由moxo
const carRouter=require('./routes/router/cangku.js')
const carMap=require('./routes/router/map.js')
const pieRouter=require('./routes/router/pir')
const yunliRouter=require('./routes/router/yunli.js')
const yichangRouter=require('./routes/router/yichang')
const yunshuRouter=require('./routes/router/yunshu')
app.use('/api',carRouter)
app.use('/api',yunshuRouter)
app.use('/api',yichangRouter)
app.use('/api',yunliRouter)
app.use('/api',carMap)
app.use('/api',pieRouter)

const port=process.env.PORT || 3008;

//监听端口
app.listen(port,()=>{
    console.log(`Is Running ${port}`)
})