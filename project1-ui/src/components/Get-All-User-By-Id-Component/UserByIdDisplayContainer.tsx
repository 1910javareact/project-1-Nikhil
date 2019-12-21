import { IState } from "../../reducer"

import { UserByIdDisplayComponent } from "./UserByIdDisplayComponent"
import {userID} from "../../action-mappers/user-action-mapper"
import { connect } from "react-redux"
const mapStateToProps = (state:IState) => {
    return {
        User:state.user.User
    }
}
const mapDispatchtoProps ={
    userID
}

export default connect(mapStateToProps,mapDispatchtoProps)(UserByIdDisplayComponent)