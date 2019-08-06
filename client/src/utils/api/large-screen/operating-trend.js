import http from '@/utils/httpRequest'

// 获取客户运量分布
const getcCommercialVehicleInfo = params => {
  return http.windPost('/operatingScreen/getcCommercialVehicleInfo', params)
}
// 获取投资企业交付及时率
const getCompanyFinish = params => {
  return http.windPost('/operatingScreen/getCompanyFinish', params)
}
// 获取投资企业出库及时率
const getCmpanyOutHourse = params => {
  return http.windPost('/operatingScreen/getCmpanyOutHourse', params)
}
// 获取广汽商贸运营情况
const getAllStat = params => {
  return http.windPost('/operatingScreen/getAllStat', params)
}
export {
  getcCommercialVehicleInfo,
  getCompanyFinish,
  getCmpanyOutHourse,
  getAllStat
}
