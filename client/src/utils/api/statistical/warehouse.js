/* eslint-disable space-before-function-paren */
import http from '../../httpRequest'

//库存量
export function getWare(data){
    // http.windPost('/wareHouseStatistics/getWareHouseNum',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/getWareHouseNum"),
        method: "post",
        params: http.adornParams(data)
      })
}

//入库量
export function getInWare(data){
    // return http.windPost('/wareHouseStatistics/getInWareHouseNum',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/getInWareHouseNum"),
        method: "post",
        params: http.adornParams(data)
      })
}

//出库量
export function getOutWare(data){
    // return http.windPost('/wareHouseStatistics/getOutWareHouseNum',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/getOutWareHouseNum"),
        method: "post",
        params: http.adornParams(data)
      })
}

//长库龄商品车
export function getLongTimeWare(data){
    // return http.windPost('/wareHouseStatistics/getLongTimeWareHouseCar',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/getLongTimeWareHouseCar"),
        method: "post",
        params: http.adornParams(data)
      })
}

//库存量比对
export function gettrastWare(data){
    // return http.windPost('/wareHouseStatistics/contrastWareHouseNum',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/contrastWareHouseNum"),
        method: "post",
        params: http.adornParams(data)
      })
}

//入库量比对
export function gettrastInWare(data){
    // return http.windPost('/wareHouseStatistics/contrastInWareHouseNum',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/contrastInWareHouseNum"),
        method: "post",
        params: http.adornParams(data)
      })
}

//出库量比对
export function gettrastOutWare(data){
    // return http.windPost('/wareHouseStatistics/contrastOutWareHouseNum',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/contrastOutWareHouseNum"),
        method: "post",
        params: http.adornParams(data)
      })
}

//长库龄商品车比对
export function gettrastLongTimeWare(data){
    // return http.windPost('/wareHouseStatistics/contrastLongTimeWareHouseCar',data)
    return http({
        url:http.adornUrl("/wareHouseStatistics/contrastLongTimeWareHouseCar"),
        method: "post",
        params: http.adornParams(data)
      })
}
///下拉
export function getSelect(data){
    return http({
      url:http.adornUrl("/sys/user/queryUserDataPower"),
      method: "get",
      params: http.adornParams(data)
    })
} 