import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import {addTodo} from "../actions/index";

// ownPropsは呼び出し元のタグに指定されたプロパティ
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    console.log('container AddTodo mapDispatchToProps', ownProps);
    return {
        onClickAddTodo: (value: string) => {
            dispatch(addTodo(value))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddTodo)
