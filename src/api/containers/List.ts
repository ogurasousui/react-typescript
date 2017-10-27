import { connect } from 'react-redux'
import { getList } from "../actions/index";
import List from '../components/List'

export default connect(
    (state: any, ownProps: any) => {
        console.log('list props', state, ownProps);
        return state
    },
    (dispatch: any, ownProps: any) => {
        return {
            getList:() => {
                dispatch(getList())
            }
        }
    }
)(List)