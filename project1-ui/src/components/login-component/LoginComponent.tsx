import React, { SyntheticEvent } from 'react'
import { FormGroup, Label, Input, Button, Form } from 'reactstrap'
import { userLogin } from '../../remote/reimbursements-clients/reimbursements-user'

export class LoginComponent extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    updateUsername = (e:any)=>{
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e:any)=>{
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    submitLogin = async (e:SyntheticEvent) => {
        e.preventDefault()
        let user = await userLogin(this.state.username, this.state.password);
        this.setState({
            ...this.state,
            user:user
        })
    }
    
    render(){
        return(
            <div className ="form">
                <Form onSubmit={this.submitLogin}>
                    <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
            </div>

        )
    }
}