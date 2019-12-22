import { IState } from "../../reducer"
import { connect } from "react-redux"
import {userID} from "../../action-mappers/user-action-mapper"
import { UseridComponent } from "./UserByIdDisplayComponent"
const mapStateToProps = (state: IState) => {
    return {
        user: state.uid.user
    }
}

const mapDispatchToProps = {
    userID
}

export default connect(mapStateToProps, mapDispatchToProps)(UseridComponent)