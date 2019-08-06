import http from '@/utils/httpRequest'

//地图位置接口
export function getTranMap(data) {
    return http({url:http.adornUrl('/wareHouseLoadMonitor/getHouseLocation'),
            method:'POST',
            params: http.adornParams(data)})
    // return http.windPost('/wareHouseLoadMonitor/getHouseLocation', data)
}
//仓存总览
export function getTranInfo(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getWarehousePandect', data)
}

//当日仓库计划
export function getTranPlanInfo(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverOrgHouseAndOutHouse', data)
}

// //投资企业库存看板
// export function getTranInfosee(data) {
//     return http.windJsonPost('/wareHouseLoadMonitor/getEverOrgCarNum', data)
// }


//客户库存看板
export function getTranInfoCustersee(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverFactoryCarNum', data)
}


//商品车品牌
export function getTranInfoCarsee(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverCarBrandCarNum', data)
}

//客户（发运地
export function getTranInfoCitysee(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverFactoryAddrCarNum', data)
}

//投资企业
export function getTranInfoHousesee(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverOrgCarNum', data)
}
//

//当日仓库计划头部菜单
export function getTranInfoHeader(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getAllOrgHouseAndOutHouse', data)
}

//延迟出库-投资企业
export function getTranInfoOrgOutTimeOut(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverOrgOutTimeOutHouseCarNum', data)
}

// 延迟出库-客户
export function getTranInfoOutTimeOutCuster(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverFactoryOutTimeOutHouseCarNum', data)
}

// 延迟出库-客户（发运地）
export function getOutTimeOutCusterFactory(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverFactoryAddrOutTimeOutHouseCarNum', data)
}

//延迟出库-商品车品牌 
export function getOutTimeOutCarNum(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverCarBrandOutTimeOutHouseCarNum', data)
}

// 延迟出库天数-vin
export function getOutTimeOutCarVin(data) {
    return http.windJsonPost('/wareHouseLoadMonitor/getEverCarVinOutTimeOutHouseCarVin', data)
}