import * as React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    getDetail: (index: number) => string
    detail: string
    match: any
}

export default class Detail extends React.Component<Props, {}> {

    render() {
        console.log('components Detail', this.props);
        return (
            <div>
                <div>{this.props.detail}</div>
                <div><Link to={'/'}>back</Link></div>
            </div>
        )
    }

    componentDidMount() {
        console.log('--- Detail componentDidMount', this.props);
        this.props.getDetail(this.props.match.params.id)
    }
}