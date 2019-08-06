import http from '@/utils/httpRequest'

// 获取投资公司下拉
const queryUserDataPower = params => {
  return http.windGet('/sys/user/queryUserDataPower ', params)
}
/* ------------------------ 运输统计(mhy) ------------------------ */
// 获取运单数
const queryWaybillCount = params => {
  return http.windGet('/transportAnalyse/queryWaybillCount', params)
}
// 获取商品车运量
const queryCarTransport = params => {
  return http.windGet('/transportAnalyse/queryCarTransport', params)
}
// 获取公铁水运量占比
const queryCarUseTypeShippingCount = params => {
  return http.windGet('/transportAnalyse/queryCarUseTypeShippingCount', params)
}
// 获取外协陆运运量占比
const queryLandfactorCount = params => {
  return http.windGet('/transportAnalyse/queryLandfactorCount', params)
}
/* ------------------------ 运输统计(mhy) ------------------------ */
/* ------------------------ 仓储统计(xx) ------------------------ */
// 获取库存量
const getWareHouseNum = params => {
  return http.windXXPost('/wareHouseStatistics/getWareHouseNum', params)
}
// 获取入库量
const getInWareHouseNum = params => {
  return http.windXXPost('/wareHouseStatistics/getInWareHouseNum', params)
}
// 获取出库量
const getOutWareHouseNum = params => {
  return http.windXXPost('/wareHouseStatistics/getOutWareHouseNum', params)
}
// 获取长库龄商品车数量
const getLongTimeWareHouseCar = params => {
  return http.windXXPost('/wareHouseStatistics/getLongTimeWareHouseCar', params)
}
/* ------------------------ 仓储统计(xx) ------------------------ */
/* ------------------------ 作业指标分析(mhy) ------------------------ */
// 获取出库及时率
const queryOutgoingRate = params => {
  return http.windGet('/operationIndex/queryOutgoingRate', params)
}
// 获取商品车滞留
const queryRetentionCount = params => {
  return http.windGet('/operationIndex/queryRetentionCount', params)
}
// 获取交付及时率
const queryTimelyDeliveryRate = params => {
  return http.windGet('/operationIndex/queryTimelyDeliveryRate', params)
}
/* ------------------------ 作业指标分析(mhy) ------------------------ */
/* ------------------------ 线路分析(mhy) ------------------------ */
// 获取线路数
const queryCircuitNumber = params => {
  return http.windGet('/line/queryCircuitNumber', params)
}
// 获取重复线路
const queryLineRepeat = params => {
  return http.windGet('/line/queryLineRepeat', params)
}
// 获取交付及时率最优TOP10
const queryDelayToptenMax = params => {
  return http.windGet('/line/queryDelayToptenMax', params)
}
// 获取交付及时率最差TOP10
const queryDelayToptenMin = params => {
  return http.windGet('/line/queryDelayToptenMin', params)
}
// 获取承运量最多TOP10
const queryCarriageCapacityMax = params => {
  return http.windGet('/line/queryCarriageCapacityMax', params)
}
// 获取承运量最少TOP10
const queryCarriageCapacityMin = params => {
  return http.windGet('/line/queryCarriageCapacityMin', params)
}
// 获取运输距离最长TOP10
const queryLineDistance = params => {
  return http.windGet('/line/queryLineDistance', params)
}
// 获取运输距离最短TOP10
const queryLineDistanceMin = params => {
  return http.windGet('/line/queryLineDistanceMin', params)
}

/* ------------------------ 线路分析(mhy) ------------------------ */
/* ------------------------ 运输安全分析(yxl) ------------------------ */
// 获取风险行为统计
const countRiskBehaviour = params => {
  return http.windXXPost('/carriageSureness/countRiskBehaviour', params)
}
// 获取高风险次数与有效干预占比
const highRiskMeddle = params => {
  return http.windXXPost('/carriageSureness/highRiskMeddle', params)
}
// 获取危险时段分布
const riskTimeFrame = params => {
  return http.windXXPost('/carriageSureness/riskTimeFrame', params)
}
// 获取高风险行为排行
const highRiskMost = params => {
  return http.windXXPost('/carriageSureness/highRiskMost', params)
}
/* ------------------------ 运输安全分析(yxl) ------------------------ */
/* ------------------------ 资源利用(ljl) ------------------------ */
// 获取投资企业板车使用(按日)
const getTruckNumByOrgCode = params => {
  return http.windPost('/Truck/getTruckNumByOrgCode', params)
}
// 获取投资企业板车使用(按周)
const getTruckNumWeekByOrgCode = params => {
  return http.windPost('/Truck/getTruckNumWeekByOrgCode', params)
}
// 获取投资企业板车使用(按月)
const getTruckNumMouthByOrgCode = params => {
  return http.windPost('/Truck/getTruckNumMouthByOrgCode', params)
}
// 获取投资企业满板率(按日)
const getTruckUsageRateByOrgCode = params => {
  return http.windPost('/Truck/getTruckUsageRateByOrgCode', params)
}
// 获取投资企业满板率(按周)
const getTruckUsageRateWeekByOrgCode = params => {
  return http.windPost('/Truck/getTruckUsageRateWeekByOrgCode', params)
}
// 获取投资企业满板率(按月)
const getTruckUsageRateMouthByOrgCode = params => {
  return http.windPost('/Truck/getTruckUsageRateMouthByOrgCode', params)
}
// 获取自有车辆利用率(按日)
const getTruckOwnRateByOrgCode = params => {
  return http.windPost('/Truck/getTruckOwnRateByOrgCode', params)
}
// 获取自有车辆利用率(按周)
const getTruckOwnRateWeekByOrgCode = params => {
  return http.windPost('/Truck/getTruckOwnRateWeekByOrgCode', params)
}
// 获取自有车辆利用率(按月)
const getTruckOwnRateMouthByOrgCode = params => {
  return http.windPost('/Truck/getTruckOwnRateMouthByOrgCode', params)
}
// 获取库位利用率(按日)
const getWarehouseUsageRateDayByOrgCode = params => {
  return http.windPost('/Truck/getWarehouseUsageRateDayByOrgCode', params)
}
// 获取库位利用率(按周)
const getWarehouseUsageRateWeekByOrgCode = params => {
  return http.windPost('/Truck/getWarehouseUsageRateWeekByOrgCode', params)
}
// 获取库位利用率(按月)
const getWarehouseUsageRatemouthByOrgCode = params => {
  return http.windPost(
    '/Truck/Truck/getWarehouseUsageRatemouthByOrgCode',
    params
  )
}
/* ------------------------ 资源利用(ljl) ------------------------ */
/* ------------------------ 运输数字化(ljl) ------------------------ */
// 获取覆盖趋势指标(按日)
const getListDayByOrgCode = params => {
  return http.windPost('/iot/getListDayByOrgCode', params)
}
// 获取覆盖趋势指标(按周)
const getListWeekByOrgCode = params => {
  return http.windPost('/iot/getListWeekByOrgCode', params)
}
// 获取覆盖趋势指标(按月)
const getListMonthByOrgCode = params => {
  return http.windPost('/iot/getListMonthByOrgCode', params)
}
/* ------------------------ 运输数字化(ljl) ------------------------ */

export {
  queryWaybillCount,
  queryCarTransport,
  queryCarUseTypeShippingCount,
  queryLandfactorCount,
  queryUserDataPower,
  getWareHouseNum,
  getInWareHouseNum,
  getOutWareHouseNum,
  getLongTimeWareHouseCar,
  queryOutgoingRate,
  queryRetentionCount,
  queryTimelyDeliveryRate,
  queryCircuitNumber,
  queryLineRepeat,
  queryDelayToptenMax,
  queryDelayToptenMin,
  queryCarriageCapacityMax,
  queryCarriageCapacityMin,
  queryLineDistance,
  queryLineDistanceMin,
  countRiskBehaviour,
  highRiskMeddle,
  riskTimeFrame,
  highRiskMost,
  getTruckNumByOrgCode,
  getTruckNumWeekByOrgCode,
  getTruckNumMouthByOrgCode,
  getTruckUsageRateByOrgCode,
  getTruckUsageRateWeekByOrgCode,
  getTruckUsageRateMouthByOrgCode,
  getTruckOwnRateByOrgCode,
  getTruckOwnRateWeekByOrgCode,
  getTruckOwnRateMouthByOrgCode,
  getWarehouseUsageRateDayByOrgCode,
  getWarehouseUsageRateWeekByOrgCode,
  getWarehouseUsageRatemouthByOrgCode,
  getListDayByOrgCode,
  getListWeekByOrgCode,
  getListMonthByOrgCode
}
