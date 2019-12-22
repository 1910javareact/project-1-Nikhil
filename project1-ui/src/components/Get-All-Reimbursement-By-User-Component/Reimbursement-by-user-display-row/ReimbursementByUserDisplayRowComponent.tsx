import React from "react"
import { reimbursement } from "../../../models/reimbursements"
 interface  IReimbursementByUserDisplayRowProps{
    Reimbursement: reimbursement
 }

export const ReimbursementByUserDisplayRow: React.FC<IReimbursementByUserDisplayRowProps> = (props) =>{
return(
    <tr>
    <td>{props.Reimbursement.reimbursementId}</td>
    <td>{props.Reimbursement.author}</td>
    <td>{props.Reimbursement.amount}</td>
    <td>{props.Reimbursement.dateSubmitted}</td>
    <td>{props.Reimbursement.dateResolved}</td>

    <td>{props.Reimbursement.description}</td>
    <td>{props.Reimbursement.status}</td>
    <td>{props.Reimbursement.resolver}</td>
    <td>{props.Reimbursement.type}</td>

</tr>
)
}