import { connect } from 'react-redux'
import { actionFetchDetail } from "../actions/index";
import ListDetail from '../components/ListDetail'

export default connect(
    null, // state
    (dispatch: any, ownProps: any) => {
        return {
            getDetail:(index: number) => {
                dispatch(actionFetchDetail(index))
            }
        }
    }
)(ListDetail)