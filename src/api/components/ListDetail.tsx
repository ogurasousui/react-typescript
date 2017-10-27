import * as React from 'react'

interface Props {
    index: number
    text: string
    getDetail: (index: number) => void
}

export default class ListDetail extends React.Component<Props, {}> {
    render() {
        return (
            <li><span onClick={() => this.props.getDetail(this.props.index)}>{this.props.text}</span></li>
        )
    }
}