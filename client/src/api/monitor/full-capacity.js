import request from '../../request/http'

//板车运力统计数据
export function getTruckUseByOrgCodeData (data){
    return request({
        url:'/api/VolumeMonitor/getTruckUseByOrgCode', 
        params:data,
        method:'get'
    });
}

//车辆历史轨迹查询
export function historyLocation(data){
    return request({
        url:'/api/openApi/historyLocation', 
        params:data,
        method:'get'
    })
  }
  //承运明细
  export function getWayBillListInfo(data){
    return request({
        url:'/api/Monitor/getWayBillListInfo',
        params:data,
        method:'get'
   })
  }
  //运单列表和详情
  export function getWayBillList(data){
    return request({
        url:'/api/Monitor/getWayBillList',
        params:data,
        method:'get'
    })
  }
  //异常的接口请求参数
  export function listByCondition(data){
    return request({
        url:'/api/openApi/listByCondition',
        params:data,
        method:'get'
       })
  }
  //轨迹弹框——视频接口
  export function getG7CodeByTruckNo(data){
    return request({
           url:'/api/openApi/getG7CodeByTruckNo',
           params:data,
           method:'get'
         })
  }
  