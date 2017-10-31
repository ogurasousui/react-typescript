import * as React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    index: number
    text: string
}

export default class ListDetail extends React.Component<Props, {}> {
    render() {
        return (
            <li>
                <Link to={'/detail/'+this.props.index}>{this.props.text}</Link>
            </li>
        )
    }
}