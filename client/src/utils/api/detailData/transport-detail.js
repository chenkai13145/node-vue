import http from '@/utils/httpRequest'

// 获取运输明细数据
const getWaybillListByOrgCode = params => {
  return http.windGet('/Monitor/getWaybillListByOrgCode', params)
}

export { getWaybillListByOrgCode }
