import { connect } from 'react-redux'
import { actionToggleMenu } from "../actions/index";
import Head from '../components/Head'

export default connect(
    (state: any, ownProps: any) => {
        console.log('!!!! head props', state, ownProps);
        return {
            drawerOpen: state.reducerHead.drawerOpen
        }
    },
    (dispatch: any, ownProps: any) => {
        return {
            handleToggle:() => {
                dispatch(actionToggleMenu())
            }
        }
    }
)(Head)