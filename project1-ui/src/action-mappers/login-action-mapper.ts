import { userLogin } from "../remote/reimbursements-clients/reimbursements-user"

export const uLoginTypes = {
    INVALID_CREDENTIALS: 'USER_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'USER_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'USER_LOGIN_FAILED_LOGIN'
}

// first action mapper
//it is going to try and login
// depending on what we get back, will will return a different action
// this action will get sent to dispatch
// kind of
// this is tricky, because we are doing an async operation
// when we do async, we return a function that returns an action
//then, redux thunk is going to intercept that function, and call it when the async is done

export const uLogin = (username:string, password:string) => async (dispatch:any) => {

    try{
        let res = await userLogin(username, password)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            dispatch({
                type:uLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:uLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:uLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }
    
}