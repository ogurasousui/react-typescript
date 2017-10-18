import * as React from 'react'

interface Props {
    onClickAddTodo: (value: string) => {}
}

export default class AddTodo extends React.Component<Props, {}> {

    private input: any

    render() {

        console.log('@@@@ component AddTodo', this.props);

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!this.input.value.trim()) {
                            return
                        }
                        this.props.onClickAddTodo(this.input.value)
                        this.input.value = ''
                    }}
                >
                    <input
                        ref={node => {
                            this.input = node
                        }}
                    />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}