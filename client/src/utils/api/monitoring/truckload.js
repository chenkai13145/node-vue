// import http from '@/utils/httpRequest'

//表格信息
const getTrafficDataTop = params =>
    http.windPost('/carWaybilMonitor/getCarWaybillInfo', params);

//头部信息
const getTrafficData = params =>
    http.windPost('/carWaybilMonitor/getTopInfo', params)

export { getTrafficDataTop, getTrafficData }