import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import Link from '../components/Link'

// ここのstateはすべてのstateが入っている
//
const mapStateToProps = (state: any, ownProps: any) => {
    // {children:"Completed", filter:"SHOW_COMPLETED"}
    // ownPropsには↑のような感じで来る。childrenはタグの中身
    console.log('container FilterLink mapStateToProps', state, ownProps);
    return {
        active: ownProps.filter === state.visibilityFilter,
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    console.log('container FilterLink mapDispatchToProps', ownProps);
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

// タグに指定するとこれが呼び出されるはず
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)