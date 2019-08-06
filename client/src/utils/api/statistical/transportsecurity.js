import http from '@/utils/httpRequest'
//风险行为统计列表
const countRiskBehaviour = params => {
  return http.windGet('/carriageSureness/countRiskBehaviour', params)
}
//危险时段分布
const riskTimeFrame = params => {
  return http.windGet('/carriageSureness/riskTimeFrame', params)
}
//获取公司列表
const getCompanyList = params => {
  return http.windGet('/sys/user/queryUserDataPower', params)
}
//高风险次数与有效干预占比
const highRiskMeddle = params => {
  return http.windGet('/carriageSureness/highRiskMeddle', params)
}
//高风险行为次数TOP - 最多
const highRiskMost = params => {
  return http.windGet('/carriageSureness/highRiskMost', params)
}
//下载明细
const downloadDetail = params => {
  return http.windGet('/carriageSureness/downloadDetail', params)
}

export { countRiskBehaviour, riskTimeFrame, getCompanyList, highRiskMeddle, highRiskMost, downloadDetail }
