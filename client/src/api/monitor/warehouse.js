import request from '../../request/http'

//地图位置接口
export function getTranMap(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getHouseLocation",
        method: "post",
        data
      })
}


//仓存总览
export function getTranInfo(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getWarehousePandect",
        method: "get",
        params: data
      })
}

//当日仓库计划
export function getTranPlanInfo(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverOrgHouseAndOutHouse",
        method: "get",
        params: data
      })
}

//客户库存看板
export function getTranInfoCustersee(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverFactoryCarNum",
        method: "get",
        params: data
      })
}

//商品车品牌
export function getTranInfoCarsee(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverCarBrandCarNum",
        method: "get",
        params: data
      })
}

//客户（发运地
export function getTranInfoCitysee(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverFactoryAddrCarNum",
        method: "get",
        params: data
      })
}

//投资企业
export function getTranInfoHousesee(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverOrgCarNum",
        method: "get",
        params: data
      })
}

//当日仓库计划头部菜单
export function getTranInfoHeader(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getAllOrgHouseAndOutHouse",
        method: "get",
        params: data
      })
}

//延迟出库-投资企业
export function getTranInfoOrgOutTimeOut(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverOrgOutTimeOutHouseCarNum",
        method: "get",
        params: data
      })
}

// 延迟出库-客户
export function getTranInfoOutTimeOutCuster(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverFactoryOutTimeOutHouseCarNum",
        method: "get",
        params: data
      })
}


// 延迟出库-客户（发运地）
export function getOutTimeOutCusterFactory(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverFactoryAddrOutTimeOutHouseCarNum",
        method: "get",
        params: data
      })
}

//延迟出库-商品车品牌 
export function getOutTimeOutCarNum(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverCarBrandOutTimeOutHouseCarNum",
        method: "get",
        params: data
      })
}

// 延迟出库天数-vin
export function getOutTimeOutCarVin(data){
    return request({
        url:"/api/wareHouseLoadMonitor/getEverCarVinOutTimeOutHouseCarVin",
        method: "get",
        params: data
      })
}

