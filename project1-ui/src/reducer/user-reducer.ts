import { IUserState } from "."
import { User } from "../models/user"
import { UserTypes } from "../action-mappers/user-action-mapper"
//import { role } from "../models/roles"

const initialState: IUserState = {
    user: new User(0, '', '', '', '', '', [])
}

export const useridReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case UserTypes.SUCCESSFUL_USER: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}





















// const initialStater: IUserState = {
//     user: new User(0, '', '', '', '','',[])
//  }// IReimbursement we are a calling this interface from index.ts and initialStarter is an object which contain properties (Reimbursement) and Reimbursement has an array of new reim datatype
 
 
//  //whatever this reducer returns, becomes the total state of the store
//  //do not forget to spread state
//  export const userReducer = (state = initialStater, action:any) => {
     
//      switch (action.type) {
//          case UserTypes.SUCCESSFUL_USER:{
//              //we return the new total state
//              //dont forget to spread
//              return {
//                  ...state,
//                  User:action.payload.User,
//                 // reimbursement:state.reimbursement
//              }
//          }
//          default:
//              return state
//      }
 
//  }