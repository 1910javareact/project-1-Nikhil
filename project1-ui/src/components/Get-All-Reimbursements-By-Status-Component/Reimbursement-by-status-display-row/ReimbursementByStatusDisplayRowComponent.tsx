import React from "react"
import { reimbursement } from "../../../models/reimbursements"

interface IReimbursementsByStatusDisplayRowProps{//In props we can't update we  can just  give types
    Reimbursement: reimbursement
}

export const ReimbursementByStatusDisplayRowComponent: React.FC<IReimbursementsByStatusDisplayRowProps> = (props) => { //=> we just need this beacuse to create a function 
    return (
        <tr>
            <td>{props.Reimbursement.reimbursementId}</td>
            <td>{props.Reimbursement.author}</td>
            <td>{props.Reimbursement.amount}</td>
            <td>{props.Reimbursement.dateSubmitted}</td>
            <td>{props.Reimbursement.description}</td>
            <td>{props.Reimbursement.status}</td>
        </tr>
    )
}