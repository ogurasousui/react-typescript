import * as React from 'react'
import { Route } from 'react-router-dom'
import ListDetail from '../containers/ListDetail'
import Detail from "./Detail"

interface Props {
    getList: () => any
    list: string[]
    detail: ''
}

// 表示するビューの構成
export default class List extends React.Component<Props, {}> {

    render() {
        console.log('List render', this.props, this.state);
        return (
            <ul>
                {this.props.list.map((text: string, key: number) =>
                    <ListDetail text={text} key={key} index={key}/>
                )}
                <Detail detail={this.props.detail} />
            </ul>
        )
    }

    componentDidMount() {
        console.log('--- List componentDidMount', this.props);
        this.props.getList()
    }
}