const initState = {
    isLoggedIn:false,
    username:null
}

export const authReducer = (state=initState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn:true,
                username:action.payload
            }

        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn:false,
                username:null
            }

        default:return state;
    }
}