import * as React from 'react'
import ListDetail from '../containers/ListDetail'
import Detail from "./Detail"

interface Props {
    getList: () => any
}

interface State {
    list: string[]
    detail: string
}

// 表示するビューの構成
export default class List extends React.Component<Props, State> {

    constructor()
    {
        console.log('List constructor')
        super()
        this.state = {
            list: [],
            detail: ''
        }
    }

    render() {
        console.log('List render', this.state);
        return (
            <ul>
                {this.state.list.map((text: string, key: number) =>
                    <ListDetail text={text} key={key} index={key}/>
                )}
                <Detail detail={this.state.detail} />
            </ul>
        )
    }

    componentDidMount() {
        console.log('List componentDidMount');
        this.props.getList()
        // fetch('http://localhost:3000/api/list').then((response) => {
        //     return response.json()
        // }).then((data) => {
        //     console.log(data)
        //     this.setState({list: data})
        // })
    }

    showDetail(index: number)
    {
        return fetch('http://localhost:3000/api/detail?index='+index).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            this.setState({detail: data})
        })
    }
}