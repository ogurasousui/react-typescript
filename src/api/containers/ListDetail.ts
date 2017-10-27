import { connect } from 'react-redux'
import { getDetail } from "../actions/index";
import ListDetail from '../components/ListDetail'

export default connect(
    null, // state
    (dispatch: any, ownProps: any) => {
        return {
            getDetail:(index: number) => {
                dispatch(getDetail(index))
            }
        }
    }
)(ListDetail)