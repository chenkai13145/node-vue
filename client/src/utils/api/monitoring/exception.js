import http from '@/utils/httpRequest'
//异常事件接口（运输，运力和异常监控页面）
const listCarnumEvent = params => {
  return http.windGet('/openApi/listCarnumEvent', params)
}
//安全事件
const listEventData = params => {
    return http.windGet('/openApi/listEvent', params)
}
//异常事件
const getOrderUnusualByOrderOrgCode = params => {
  return http.windGet('/Monitor/getOrderUnusualByOrderOrgCode', params)
}
//地图接口
const openApiQueryEventList = params => {
  return http.windGet('/openApi/openApiQueryEventList', params)
}
//风险总数
const listTruckRisk = params => {
  return http.windGet('/openApi/listTruckRisk', params)
}
//设备异常
const stateListBy = params => {
  return http.windGet('/openApi/stateListBy', params)
}
export { listCarnumEvent, listEventData, getOrderUnusualByOrderOrgCode, openApiQueryEventList, listTruckRisk,stateListBy }
