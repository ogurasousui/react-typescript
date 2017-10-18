import { connect } from 'react-redux'
import PostTime from '../components/PostTime'

const mapStateToProps = (state: any, ownProps: any): any => {
    console.log('====== container PostTime mapStateToProps', state, ownProps);
    if (state.todos.length > 0)
    {
        return state.postTime
    }
    else
    {
        return ownProps
    }
}

export default connect(
    mapStateToProps,
    null
)(PostTime)