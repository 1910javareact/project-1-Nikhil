import React from 'react'
import { User } from '../../../../models/user'
//import { userLogin } from '../../../../remote/reimbursements-clients/reimbursements-user'
interface IUserDisplayRowComponent{
    user:User
}
export const UserDisplayRowComponent: React.FC<IUserDisplayRowComponent> = (props)=>{
    return(
        <tr>
           <td>{props.user.userId}</td>
    <td>{props.user.username}</td>
<td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
<td>{props.user.email}</td>
{/* <td>{props.user.roles}</td> */}

</tr>
    )
}