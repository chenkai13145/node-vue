/* 图表分析 */
import http from '@/utils/httpRequest'

//图表分析-运输统计-运单数
const getWaybillnumber = params => {
  return http.windGet('/transportAnalyse/queryWaybillCount', params)
}	
//图表分析-运输统计-商品车运量
const getforcartraffic = params => {
  return http.windGet('/transportAnalyse/queryCarTransport', params)
}		
//图表分析-运输统计-公铁水运量占比
const getmalemolteniron = params => {
  return http.windGet('/transportAnalyse/queryCarUseTypeShippingCount', params)
}	
//图表分析-运输统计-外协陆运运量占比
const getoutsourcing = params => {
  return http.windGet('/transportAnalyse/queryLandfactorCount', params)
}	
//图表分析-运输统计-商品车同期对比运量
const getforcartrafficdb = params => {
  return http.windGet('/transportAnalyse/querySynchronizationRatioCount', params)
}		

//-投资公司下拉
const getcompany = params => {
  return http.windGet('/sys/user/queryUserDataPower', params)
}	

export { getWaybillnumber,getforcartraffic,getmalemolteniron,getoutsourcing,getforcartrafficdb,getcompany }
	