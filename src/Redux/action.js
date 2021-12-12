 import { ADDPOST, LOGIN } from'./types.js'
 export const login = (user) => {
     return{
         type : LOGIN,
         payload : user
     }   
 }
 export const addpost = (newpost) => {
     return {
         type : ADDPOST,
         payload: newpost
     }
 }
