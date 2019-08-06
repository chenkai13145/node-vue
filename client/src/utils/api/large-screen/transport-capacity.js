import http from '@/utils/httpRequest'

// 获取陆运车辆总数
const getCartruck = params => {
  return http.windPost('/VolumeMonitor/cartruck', params)
}

// 获取当前投资企业运力占比
const getOrgTruck = params => {
  return http.windPost('/VolumeMonitor/orgTruck', params)
}
// 获取当前车型占比
const getAmountTruck = params => {
  return http.windPost('/VolumeMonitor/amountTruck', params)
}

// 当前运力满足度
const getTotalTruck = params => {
  return http.windPost('/VolumeMonitor/totalTruck', params)
}

// 本月车辆利用率
const getDateTruck = params => {
  return http.windPost('/VolumeMonitor/dateTruck', params)
}

// 车辆满板率
const getCodeTruck = params => {
  return http.windPost('/VolumeMonitor/codeTruck', params)
}

export {
  getCartruck,
  getOrgTruck,
  getAmountTruck,
  getTotalTruck,
  getDateTruck,
  getCodeTruck
}
