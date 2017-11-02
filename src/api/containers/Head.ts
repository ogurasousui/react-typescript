import { connect } from 'react-redux'
import { actionToggleMenu, actionFetchMenu } from "../actions/index";
import Head from '../components/Head'

export default connect(
    (state: any, ownProps: any) => {
        console.log('!!!! head props', state, ownProps);
        return {
            drawerOpen: state.reducerHead.drawerOpen,
            list: state.reducerHead.list
        }
    },
    (dispatch: any, ownProps: any) => {
        return {
            handleToggle: () => {
                dispatch(actionToggleMenu())
            },
            getMenuList: () => {
                dispatch(actionFetchMenu())
            }
        }
    }
)(Head)