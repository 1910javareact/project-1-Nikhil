import { ReimbTypes } from "../action-mappers/reimbursement-action-mapper"
import { IReimbursment } from "."
import { reimbursement } from "../models/reimbursements"

const initialState: IReimbursment = {
    Reimbursement: [new reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
 }// IReimbursement we are a calling this interface from index.ts and initialStarter is an object which contain properties (Reimbursement) and Reimbursement has an array of new reim datatype
 
 
 //whatever this reducer returns, becomes the total state of the store
 //do not forget to spread state
 export const reimbursementReducer = (state = initialState, action:any) => {
     
     switch (action.type) {
         case ReimbTypes.SUCCESSFUL_REIMBURSEMENT:{
             //we return the new total state
             //dont forget to spread
             return {
                 ...state,
                 Reimbursement:action.payload.Reimbursement,
                // reimbursement:state.reimbursement
             }
         }
         default:
             return state
     }
 
 }