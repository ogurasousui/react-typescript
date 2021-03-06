import { connect } from 'react-redux'
import { actionFetchDetail } from "../actions/index";
import Detail from '../components/Detail'

export default connect(
    (state: any, ownProps: any) => {
        // Componentsのpropsにセットされる
        return {
            detail: state.reducerDetail.detail
        }
    },
    (dispatch: any, ownProps: any) => {
        return {
            getDetail:(index: number) => {
                dispatch(actionFetchDetail(index))
            }
        }
    }
)(Detail)