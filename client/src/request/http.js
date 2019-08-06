import axios from 'axios'
import { Loading,Message } from 'element-ui';


let loading
function startloading(){
    loading=Loading.service({
        lock:true,
        text:"拼命加载中....",
        background:'rgba(0,0,0,0,7)'
    });
}
function endloading(){
    loading.close();
}



//请求拦截
axios.interceptors.request.use(config=>{
    //加载动画
    startloading();

    if(localStorage.eToken){
        //设置统一的请求头
        config.headers.Authorization=localStorage.eToken;
    }
    return config;
},error=>{return Promise.reject(error)})





//响应拦截
axios.interceptors.response.use(response=>{
    endloading();
    return response;
},error=>{
    //错误提醒
    endloading();
    Message.error(error.response.data)
    const {status}=error.response;
    if(status=='401'){
        Message.error("token 失效请重新登录");
        localStorage.removeItem('eToken');
        this.$router.push('/login')
    }
  


    return Promise.reject(error)
})


export default axios
