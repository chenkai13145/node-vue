/* 图表分析 */
import http from '@/utils/httpRequest'
//图表分析-路线分析-线路数
const getNumberlines = params => {
  return http.windGet('/line/queryCircuitNumber', params)
}
//图表分析-路线分析-重复路线top20
const getdelaytop20 = params => {
  return http.windGet('/line/queryLineRepeat', params)
}
//图表分析-路线分析-交互及时率最优top10
const getTimelytimal = params => {
  return http.windGet('/line/queryDelayToptenMax', params)
}	
//图表分析-路线分析-交互及时率最差top10
const getTimelypoor = params => {
  return http.windGet('/line/queryDelayToptenMin', params)
}	
//图表分析-路线分析-运输距离最长top10
const getransportlongest = params => {
  return http.windGet('/line/queryLineDistance', params)
}	
//图表分析-路线分析-运输距离最短top10
const getransportshortest = params => {
  return http.windGet('/line/queryLineDistanceMin', params)
}	
//图表分析-路线分析-承运量最多top10
const getcarriermost = params => {
  return http.windGet('/line/queryCarriageCapacityMax', params)
}	
//图表分析-路线分析-承运量最少top10
const getcarrierminimum = params => {
  return http.windGet('/line/queryCarriageCapacityMin', params)
}	
		
export { getNumberlines,getdelaytop20,getTimelytimal,getTimelypoor,getransportlongest,getransportshortest,getcarriermost,getcarrierminimum }
	