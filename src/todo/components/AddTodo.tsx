import * as React from 'react'

interface Props {
    onAddClick: (text: string) => {}
}

export default class AddTodo extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(e: any) {
        const node: any = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}