const initialState ={
  data:{},
  token:''
}

const user = (state = initialState, action)=>{
  switch(action.type){
    case'REGISTER_USER_SUCCESS':
      return {
        ...state,
        data:action.user
      }

    case 'LOGIN_USER_SUCCESS':
      return{
        ...state,
        token:action.token
      }
    default:
      return state
  }
}

export default user
