import http from '@/utils/httpRequest'

//列子
export function jj(data){
   return http.windJsonPost('/line',data)
}