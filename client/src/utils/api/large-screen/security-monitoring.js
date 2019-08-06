import http from '@/utils/httpRequest'

// 获取事件数据
const listEvent = params => {
  return http.windPost('/openApi/listEvent', params)
}
// 获取地图数据
const openApiQueryEventList = params => {
  return http.windPost('/openApi/openApiQueryEventList', params)
}
// 获取车辆风险
const listTruckRisk = params => {
  return http.windPost('/openApi/listTruckRisk', params)
}

export { listEvent, openApiQueryEventList, listTruckRisk }
