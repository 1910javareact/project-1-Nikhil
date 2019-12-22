import { IState } from "../../reducer"
import { connect } from "react-redux"
import {reimbursementID} from "../../action-mappers/reimbursementUser-action-mapper"
import { RembursementByUserDisplayComponent } from "./ReimbursementByUserDisplayComponent"

const mapStateToProps = (state:IState) => {
    return {
        Reimbursement:state.Reimbs.Reimbursement
    }
}
const mapDispatchToProps ={
    reimbursementID
}

export default connect(mapStateToProps,mapDispatchToProps)(RembursementByUserDisplayComponent)