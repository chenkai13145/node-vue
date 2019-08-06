import http from '@/utils/httpRequest'

//板车运力统计数据
const getTruckUseByOrgCodeData = params =>
    http.windGet('/VolumeMonitor/getTruckUseByOrgCode', params);
//车辆历史轨迹查询
const historyLocation = params => {
  return http.windGet('/openApi/historyLocation', params)
}
//承运明细
const getWayBillListInfo = params => {
  return http.windGet('/Monitor/getWayBillListInfo', params)
}
//运单列表和详情
const getWayBillList = params => {
  return http.windGet('/Monitor/getWayBillList', params)
}
//异常的接口请求参数
const listByCondition = params => {
  return http.windGet('/openApi/listByCondition', params)
}
//轨迹弹框——视频接口
const getG7CodeByTruckNo = params => {
  return http.windGet('/openApi/getG7CodeByTruckNo', params)
}
export { getTruckUseByOrgCodeData, historyLocation, getWayBillListInfo, getWayBillList, listByCondition,getG7CodeByTruckNo }