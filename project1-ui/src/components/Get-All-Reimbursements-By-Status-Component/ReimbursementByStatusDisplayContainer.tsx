import { connect } from "react-redux"


import { IState } from "../../reducer"
import {reimbursementID}from "../../action-mappers/reimbursement-action-mapper"
import { RembursementByStatusDisplayComponent } from "./ReimbursementByStatusDisplayComponent"

const mapStateToProps = (state:IState) => {
    return {
        Reimbursement:state.reimb.Reimbursement
    }
}
const mapDispatchToProps ={
    reimbursementID
}

export default connect(mapStateToProps,mapDispatchToProps)(RembursementByStatusDisplayComponent)