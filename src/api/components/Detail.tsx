import * as React from 'react'

interface Props {
    detail: string
}

export default class Detail extends React.Component<Props, {}> {

    render() {
        return (
            <div>{this.props.detail}</div>
        )
    }
}