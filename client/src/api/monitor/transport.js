import request from '../../request/http'

//获取运量统计数据流
export function getMonitorByOrgCodeData(data){
    return request({
        url:'/api/Monitor/getMonitorByOrgCode', 
        params:data,
        method:'get'
    })
  }
  //运量统计对比列表接口
  export function getMonitorByGroupOrgCodeData(data){
    return request({
        url:'/api/Monitor/getMonitorByGroupOrgCode',
        params:data,
        method:'get'
    })
  }
  //公铁水对比接口
  export function getWayBillByOrderOrgCodeData(data){
    return request({
        url:'/api/Monitor/getWayBillByOrderOrgCode',
        params:data,
        method:'get'
    })
  }
  //今日发运次数和标准仙露
  export function getLineNumberData(data){
    return request({
        url:'/api/LineMonitor/getLineNumber',
        params:data,
        method:'get'
    })
  }
  //获取地图信息
  export function getTruckWaybilData(data){
    return request({
        url:'/api/Monitor/getTruckWaybil',
        params:data,
        method:'get'
     })
  }
  