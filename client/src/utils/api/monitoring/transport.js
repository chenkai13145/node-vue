import http from '@/utils/httpRequest'

// 获取运量统计数据流
// const getTrafficData = params => {
//   return http.windPost('/dwdOrder/getMonitorByOrgCode', params)
// }

//获取运量统计数据流
const getMonitorByOrgCodeData = params => {
  return http.windGet('/Monitor/getMonitorByOrgCode', params)
}
//运量统计对比列表接口
const getMonitorByGroupOrgCodeData = params => {
  return http.windGet('/Monitor/getMonitorByGroupOrgCode', params)
}
//公铁水对比接口
const getWayBillByOrderOrgCodeData = params => {
  return http.windGet('/Monitor/getWayBillByOrderOrgCode', params)
}
//今日发运次数和标准仙露
const getLineNumberData = params => {
  return http.windGet('/LineMonitor/getLineNumber', params)
}
//获取地图信息
const getTruckWaybilData = params => {
  return http.windGet('/Monitor/getTruckWaybil', params)
}

export { getMonitorByOrgCodeData, getMonitorByGroupOrgCodeData, getWayBillByOrderOrgCodeData, getLineNumberData, getTruckWaybilData }
