/* 图表分析 */
import http from '@/utils/httpRequest'

//图表分析-作业指标-出库及时率
const getoutboundrate = params => {
  return http.windGet('/operationIndex/queryOutgoingRate', params)
}
//图表分析-作业指标-出库及时率同期对比
const getoutboundratedb = params => {
  return http.windGet('/operationIndex/queryOutgoingSynchronizationRatio', params)
}
//图表分析-作业指标-商品车滞留
const getstrandedforcar = params => {
  return http.windGet('/operationIndex/queryRetentionCount', params)
}	
//图表分析-作业指标-商品车滞留同期对比
const getstrandedforcardb = params => {
  return http.windGet('/operationIndex/queryOutgoingSynchronizationRatio', params)
}
//图表分析-作业指标-交付及时率
const getdeliveryrate = params => {
  return http.windGet('/operationIndex/queryTimelyDeliveryRate', params)
}
//图表分析-作业指标-交付及时率同期对比
const getdeliveryratedb = params => {
  return http.windGet('/operationIndex/queryTimelyDeliverySynchronizationMeasure', params)
}
//图表分析-作业指标-延迟交付数量趋势
const getdelaydelivery = params => {
  return http.windGet('/operationIndex/queryDelayedInteraction', params)
}
//图表分析-作业指标-延迟交付天数TOP10
const getdelaydeliverytop = params => {
  return http.windGet('/operationIndex/queryDelayTopten', params)
}
		
export { getoutboundrate,getoutboundratedb,getstrandedforcar,getstrandedforcardb,getdeliveryrate,getdeliveryratedb,getdelaydelivery,getdelaydeliverytop }
	