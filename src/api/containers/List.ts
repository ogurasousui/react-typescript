import { connect } from 'react-redux'
import { actionFetchList } from "../actions/index";
import List from '../components/List'

export default connect(
    (state: any, ownProps: any) => {
        // Componentsのpropsにセットされる
        return {
            list: state.reducerList.list,
            detail: state.reducerDetail.detail
        }
    },
    (dispatch: any, ownProps: any) => {
        return {
            getList:() => {
                dispatch(actionFetchList())
            }
        }
    }
)(List)