import React from 'react'

import { userLogin } from '../remote/reimbursements-clients/reimbursements-user'

export class Home extends React.Component<any, any>{
    constructor(props:any){
        super(props)
        this.state={
            user:{}
        }
    }

    async componentDidMount(){ //
        let user = await userLogin('', '') //empty string because if we refresh 
        this.setState({
            ...this.state,
            user
        })
    }

    render() {
        console.log(this.state.user);
        
        return (
            // we have a special tag in react that isn't a real element
            // we call this tag a fragment
            // it look like an empty html tag, and react will treat it as an html tag
            // but it will not get rendered to the real dom
            <>
                
                {/* {this.state.user} */}
            </>
        )
    }
}