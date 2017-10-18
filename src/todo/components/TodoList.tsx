import * as React from 'react'
import Todo from './Todo'

interface Props {
    todos: {text: string, completed: boolean}[]
    onTodoClick: (index: number) => {}
}

export default class TodoList extends React.Component<Props, {}> {

    render() {

        console.log('@@@@ component TodoList', this.props);

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
