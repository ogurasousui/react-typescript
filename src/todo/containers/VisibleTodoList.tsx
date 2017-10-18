import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos: any, filter: any) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((t: any) => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter((t: any) => !t.completed);
    }
};

// reducerで返したstatus
const mapStateToProps = (state: any) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onTodoClick: (id: any) => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)