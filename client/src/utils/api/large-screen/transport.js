import http from '@/utils/httpRequest'

// 获取全网线路
const getTotal = params => {
  return http.windPost('/LineMonitor/getTotal', params)
}
// 获取今年线路累计运量
const getLineTotal = params => {
  return http.windPost('/LineMonitor/getLineTotal', params)
}
// 获取发运线路
const getLineMile = params => {
  return http.windPost('/LineMonitor/getLineMile', params)
}
// 获取今年投资企业线路数
const getOrgCodeLineMile = params => {
  return http.windPost('/LineMonitor/getOrgCodeLineMile', params)
}
// 获取地图数据
const getTruckWaybil = params => {
  return http.windPost('/LineMonitor/getTruckWaybil', params)
}
export {
  getTotal,
  getLineTotal,
  getLineMile,
  getOrgCodeLineMile,
  getTruckWaybil
}
