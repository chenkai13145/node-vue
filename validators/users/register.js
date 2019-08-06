const validator=require('validator')
const isEmpty=require('../isEmpty')

module.exports=function validatorRegisterInput(data){
    let errors={};
    data.name=!isEmpty(data.name)?data.name:'';
    data.email=!isEmpty(data.email)?data.email:'';
    data.password=!isEmpty(data.password)?data.password:'';
    data.password2=!isEmpty(data.password2)?data.password2:'';

    if(!validator.isLength(data.name,{min:2,max:16})){
        errors.name="名称长度不能小于2位并且不能超过16位！"
        errors.trueoff=true
    }
    if(!validator.isLength(data.password,{min:4,max:14})){
        errors.password="密码长度不能小于4位并且不能超过14位！"
        errors.trueoff=true
    }
    if(!validator.isEmail(data.email)){
        errors.email="email不合法！"
        errors.trueoff=true
    }
    if(!validator.equals(data.password,data.password2)){
        errors.password="两次密码不一致"
        errors.trueoff=true
    }
    return{
        errors,
        isValid:isEmpty(errors)
    }
}