
const users={
     state:{
        user:{},
        isAuthtoken:false,
        departmentdata:[],
       },
       mutations:{
           isAuthtokens(state,isToken){
             if(isToken){state.isAuthtoken=isToken;}
             else {state.isAuthtoken=false}
           },
           isusers(state,user){
             if(user){state.user=user}
             else {state.user={}}
           },
           clearuser(state){
               state.user={},
               state.isAuthtoken=false
           },
           department(state,departments){
             if(departments){state.departmentdata=departments}
             else {state.departmentdata=[]}
           }
       },
       getters:{
            user:state=>{
             return state.user
            },
            isAuthtoken:state=>{
             return  state.isAuthtoken
            }
       },
       actions:{
         setAuthtoken({commit},isToken){
           commit('isAuthtokens',isToken)
         },
         setuser({commit},user){
           commit('isusers',user)
         },
         clear({commit}){
          commit('clearuser')
         },
         //department
         getDeMent({commit},departmentdata){
           commit('department',departmentdata)
         }
       }
}
export default users