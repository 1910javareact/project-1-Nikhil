import { IState } from "../../reducer";
import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";
import { uLogin } from '../../action-mappers/login-action-mapper'

// this container, will be what connects the login component to the redux store and to dispatch
// we will generally make two things here
// one: what to get from the store
// two: what functions to hook up to dispatch

//this is what I want to get from the store
const mapStateToProps = (state: IState) => {
    //this function returns, what we want from state as an pbject
    return {
        user: state.login.user
    }
}
//this is for defining what functions can send actions to dispatch
//we give this object our action mapper functions
// those functions return an action
// redux will then pass that action to dispatch
const mapDispatchToProps = {
    uLogin
}

//export the new container component that wraps up our original component
//if we dont use the container component, we don't get any redux
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)