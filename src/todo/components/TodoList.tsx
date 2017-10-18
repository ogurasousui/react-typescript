import * as React from 'react'
import Todo from './Todo'

interface Props {
    onTodoClick: (index: number) => {}
    todos: {text: string, completed: boolean}[]
}

export default class TodoList extends React.Component<Props, {}> {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                          key={index}
                          onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}
