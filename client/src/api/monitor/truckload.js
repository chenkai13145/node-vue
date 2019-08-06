import request from '../../request/http'
//头部数据
export function getTrafficDataTop(data){
      return request({
          method:'get',
          url:'/api/carWaybilMonitor/getTopInfo',
          params:data
      })
}

//表格数据
export function getTrafficData(data){
    return request({
        method:'post',
        url:'/api/carWaybilMonitor/getCarWaybillInfo',
        data
    })
}
