import {ADDPOST, LOGIN} from './types'
import picture1 from '../Images/picture1.png'
const initialState = {
    users : [
        {id:0,
        username:"avar",
        password:1234,
        userpic:picture1
    },
    {id:1,
    username:'avatar',
  password:1234}
   
    ],
     auth: false,
    posts : [
      {id:0,
      post:"firstpost",
      userid:0
    }
    ]
}
const Reducer = ( state = initialState,action) => {
    switch (action.type) {
      case LOGIN:
        return {...state, auth:true , user : action.payload }
      case ADDPOST:
        return{...state, posts: [...state.posts, action.payload]}
      default:
        return state
    }
}

export default Reducer




