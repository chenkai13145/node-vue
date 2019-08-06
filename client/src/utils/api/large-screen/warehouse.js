import http from '@/utils/httpRequest'

// 获取所有仓库车辆数及出库入库数
const getAllCarTatolOutIn = params => {
  return http.windPost('/wareHouseScreen/getAllCarTatolOutIn', params)
}
// 获取各个投资企业仓库及出库信息
const getEverOrgHouseAndOutHouse = params => {
  return http.windPost('/wareHouseScreen/getEverOrgHouseAndOutHouse', params)
}
// 获取各个供应商库存数
const getEverFactoryCarNum = params => {
  return http.windPost('/wareHouseScreen/getEverFactoryCarNum', params)
}
// 获取各个投资企业仓库及出库信息
const getEverOrgCarNum = params => {
  return http.windPost('/wareHouseScreen/getEverOrgCarNum', params)
}
// 获取地图数据
const getHouseLocation = params => {
  return http.windPost('/wareHouseScreen/getHouseLocation', params)
}
// 获取地图仓库数据
const getAllHouseInfo = params => {
  return http.windPost('/wareHouseScreen/getAllHouseInfo', params)
}
export {
  getAllCarTatolOutIn,
  getEverOrgHouseAndOutHouse,
  getEverFactoryCarNum,
  getEverOrgCarNum,
  getHouseLocation,
  getAllHouseInfo
}
