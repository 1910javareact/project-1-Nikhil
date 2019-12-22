import { combineReducers } from "redux";

import { loginReducer } from "./login-reducer";

import { User } from "../models/user";
import { reimbursement } from "../models/reimbursements";
import { reimbursementReducer } from "./reimbursementStatus-reducer";

import { useridReducer } from "./user-reducer";
import { reimbursementUserReducer } from "./reimbursementUser-reducer";

//this file will contain the type definitions for our store
//there will be many interfaces, that contain what each chunk of store should have
//there will be a special function called combine reducers
//this function will take all of the individual reducers and turn them into one super reducer

//this is specifically, the state from the login component
//other things will be able to use it, but it is under the nme of login
export interface ILoginState {
    user:User
}


//will be the typing of our entire global state
export interface IState{
    reimb: IReimbursment,
    login:ILoginState,
    uid: IUserState
    Reimbs:IReimbursementUser
    
}

//this will combine all of our reducers
//and make sure they fufill the state required by IState
export const state = combineReducers<IState>({
    login:loginReducer,
    reimb:reimbursementReducer,
    uid:useridReducer,
    Reimbs:reimbursementUserReducer
})



export interface IReimbursment {
    Reimbursement:reimbursement[]
}
export interface IUserState {
    user: User
}
 export interface IReimbursementUser{
    Reimbursement: reimbursement[]
}
//