import request from '../../request/http'
//异常事件接口（运输，运力和异常监控页面）
export function listCarnumEvent(data){
  return request({
      url:'/api/openApi/listCarnumEvent', 
      params:data,
      method:'get'
  })
}

////安全事件
export function listEventData(data){
    return request({
        url:'/api/openApi/listEvent', 
        params:data,
        method:'get'
    })
}

//异常事件
export function getOrderUnusualByOrderOrgCode(data){
    return request({
        url:'/api/Monitor/getOrderUnusualByOrderOrgCode', 
        params:data,
        method:'get'
    })
}

//地图接口
export function openApiQueryEventList(data){
    return request({
        url:'/api/openApi/openApiQueryEventList', 
        params:data,
        method:'get'
    })
}

///风险总数
export function listTruckRisk(data){
    return request({
        url:'/api/openApi/listTruckRisk', 
        params:data,
        method:'get'
    })
}

//设备异常
export function stateListBy(data){
    return request({
        url:'/api/openApi/stateListBy', 
        params:data,
        method:'get'
    })
}