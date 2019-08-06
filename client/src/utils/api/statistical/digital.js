import http from '@/utils/httpRequest'
//数字化覆盖趋势指标-每天数据
const getListDayByOrgCode = params => {
  return http.windGet('/iot/getListDayByOrgCode', params)
}
//数字化覆盖趋势指标-每周数据
const getListWeekByOrgCode = params => {
    return http.windGet('/iot/getListWeekByOrgCode', params)
}
//数字化覆盖趋势指标-每月数据
const getListMonthByOrgCode = params => {
    return http.windGet('/iot/getListMonthByOrgCode', params)
}
//下载明细
const exportExcel = params => {
    return http.windGet('/iot/exportExcel', params)
}
export { getListDayByOrgCode, getListWeekByOrgCode, getListMonthByOrgCode, exportExcel }
