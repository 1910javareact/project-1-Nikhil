import { User } from "../../models/user"
import React, { SyntheticEvent } from "react"
import { FormGroup, Label, Input, Button, Table, Form } from "reactstrap"

interface IUseridProps {
    user: User
    userID: (id: number) => void

}


export class UseridComponent extends React.Component<IUseridProps, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            id: 0
        }
    }

    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }

    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.userID(this.state.id)
    }

    render() {

        return (
            <div className="form">
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="Have your User ID" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>

                <br />
                

                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>UserID</td>
                            <td>Firstname</td>
                            <td>Lastname</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.user.userId}</td>
                            <td>{this.props.user.firstName}</td>
                            <td>{this.props.user.lastName}</td>
                            <td>{this.props.user.email}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}