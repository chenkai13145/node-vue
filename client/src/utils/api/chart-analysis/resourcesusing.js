/* 图表分析 */
import http from '@/utils/httpRequest'

//图表分析-资源利用-投资企业板车使用(按日)
const getcarabinerDay = params => {
  return http.windGet('/Truck/getTruckNumByOrgCode', params)
}	
//图表分析-资源利用-投资企业板车使用(按周)
const getcarabinerWeek = params => {
  return http.windGet('/Truck/getTruckNumWeekByOrgCode', params)
}
//图表分析-资源利用-投资企业板车使用(按月)
const getcarabinerMouth = params => {
  return http.windGet('/Truck/getTruckNumMouthByOrgCode', params)
}

//图表分析-资源利用-投资企业满板率(按日)
const getboardrateDay = params => {
  return http.windGet('/Truck/getTruckUsageRateByOrgCode', params)
}
//图表分析-资源利用-投资企业满板率(按周)
const getboardrateWeek = params => {
  return http.windGet('/Truck/getTruckUsageRateWeekByOrgCode', params)
}
//图表分析-资源利用-投资企业满板率(按月)
const getboardrateMouth = params => {
  return http.windGet('/Truck/getTruckUsageRateMouthByOrgCode', params)
}

//图表分析-资源利用-自有车使用率(按日)
const getfreecarDay = params => {
  return http.windGet('/Truck/getTruckOwnRateByOrgCode', params)
}
//图表分析-资源利用-自有车使用率(按周)
const getfreecarWeek = params => {
  return http.windGet('/Truck/getTruckOwnRateWeekByOrgCode', params)
}
//图表分析-资源利用-自有车使用率(按月)
const getfreecarMouth = params => {
  return http.windGet('/Truck/getTruckOwnRateMouthByOrgCode', params)
}

//图表分析-资源利用-库位利用率(按日)
const getlocationDay = params => {
  return http.windGet('/Truck/getWarehouseUsageRateDayByOrgCode', params)
}
//图表分析-资源利用-库位利用率(按周)
const getlocationWeek = params => {
  return http.windGet('/Truck/getWarehouseUsageRateWeekByOrgCode', params)
}
//图表分析-资源利用-库位利用率(按月)
const getlocationMouth = params => {
  return http.windGet('/Truck/getWarehouseUsageRatemouthByOrgCode', params)
}
		
export { getcarabinerDay,getcarabinerWeek,getcarabinerMouth,getboardrateDay,getboardrateWeek,getboardrateMouth
				,getfreecarDay,getfreecarWeek,getfreecarMouth,getlocationDay,getlocationWeek,getlocationMouth }
	