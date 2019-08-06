import http from '@/utils/httpRequest'

// 获取顶部实时统计
const getOutlist3 = params => {
  return http.windPost('/VolumeMonitor/getMonitorByOrgCode/outlist3', params)
}
// 获取顶部公铁水数据
const getOutlist7 = params => {
  return http.windPost('/VolumeMonitor/getMonitorByOrgCode/outlist7', params)
}
// 左侧发运量柱形图数据
const getOutlist4 = params => {
  return http.windPost('/VolumeMonitor/getMonitorByOrgCode/outlist4', params)
}
// 客户发运量
const getOutlist5 = params => {
  return http.windPost('/VolumeMonitor/getMonitorByOrgCode/outlist5', params)
}
// 城市发运量
const getOutlist6 = params => {
  return http.windPost('/VolumeMonitor/getMonitorByOrgCode/outlist6', params)
}
// 城市接收量
const getOutlist1 = params => {
  return http.windPost('/VolumeMonitor/getMonitorByOrgCode/outlist1', params)
}

// 获取右侧环形图
const getOutlist2 = params => {
  return http.windPost('/VolumeMonitor/getMonitorByOrgCode/outlist2', params)
}

export {
  getOutlist1,
  getOutlist2,
  getOutlist3,
  getOutlist4,
  getOutlist5,
  getOutlist6,
  getOutlist7
}
