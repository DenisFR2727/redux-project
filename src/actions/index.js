export const listUser = (user)=>({
    type: "LIST_USER",
    payload: user
})

// Органайзер
 export const listDays = (day)=>{
    return { 
           type: "LIST_DAYS",
           payload: day
        }  

 };
 export const addDay = (day)=>{
     return {
         type:"ADD_DAY",
         payload:day
     }
 }