import React, { SyntheticEvent } from "react";
import { RouteComponentProps } from "react-router";
import { reimbursement } from "../../models/reimbursements";

import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { getReimbursementByStatus } from "../../remote/reimbursements-by-status";
import { ReimbursementByStatusDisplayRowComponent } from "./Reimbursement-by-status-display-row/ReimbursementByStatusDisplayRowComponent";



interface IRembursementByStatusDisplayProps extends RouteComponentProps {
    Reimbursement: reimbursement[]
    reimbursementID: (id: number) => void//we are setting reimId to a type of function that takes an argument Id and this id is of type number and this number doesnot return anything 

}
// interface IRembursementByStatusDisplayState{
//     allReimburements:reimbursement[]
//     id:number
// }

export class RembursementByStatusDisplayComponent extends React.Component<IRembursementByStatusDisplayProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: undefined
        }
    }
    //if I don't have set state in this then my status id will always be undefined 
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value//e is a property of the state,we are assigning value to the id 
        })
    }
    //submt button 
    submitId = async (e: SyntheticEvent) => {//promise of the event, 
        e.preventDefault()
        this.props.reimbursementID(this.state.id)// we are passing stateId to the reimID, by this we are overriding the preventdefault funtion 
    }
    
    render() {
        let rows = this.props.Reimbursement.map((e) => {
            return <ReimbursementByStatusDisplayRowComponent Reimbursement={e} key={'Reimbursement' + e.reimbursementId} />//mapping  through keys and value ,Reimbursement is the key and + e.reimbursementId is the value
        })
        return (

            <div className ="form">
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID">ID</Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="with a placeholder" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Description</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>



        )
    }
}

