import * as React from 'react'

interface Props {
    onClick: () => {}
    text: string
    completed: boolean
}

export default class Todo extends React.Component<Props, {}> {
    render() {

        console.log('@@@@ component Todo', this.props);

        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}
