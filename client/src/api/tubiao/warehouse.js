import request from '../../request/http'

//库存量
export function getWare(data){
    return request({
        url:"/api/wareHouseStatistics/getWareHouseNum",
        method: "post",
        data
      })
}


//入库量
export function getInWare(data){
    return request({
        url:"/api/wareHouseStatistics/getInWareHouseNum",
        method: "post",
        data
      })
}

//出库量
export function getOutWare(data){
    return request({
        url:"/api/wareHouseStatistics/getOutWareHouseNum",
        method: "post",
        data
      })
}


//长库龄商品车
export function getLongTimeWare(data){
    return request({
        url:"/api/wareHouseStatistics/getLongTimeWareHouseCar",
        method: "post",
        data
      })
}

//库存量比对
export function gettrastWare(data){
    return request({
        url:"/api/wareHouseStatistics/contrastWareHouseNum",
        method: "post",
        data
      })
}

//入库量比对
export function gettrastInWare(data){
    return request({
        url:"/api/wareHouseStatistics/contrastInWareHouseNum",
        method: "post",
        data
      })
}

//出库量比对
export function gettrastOutWare(data){
    return request({
        url:"/api/wareHouseStatistics/contrastOutWareHouseNum",
        method: "post",
        data
      })
}

///下拉
export function getSelect(data){
    return request({
        url:"/api/sys/user/queryUserDataPower",
        method: "post",
        data
      })
}