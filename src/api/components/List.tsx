import * as React from 'react'
import { Route } from 'react-router-dom'
import ListDetail from './ListDetail'
import Detail from "../containers/Detail"
import { ListItem as ListContainer } from 'material-ui/List';

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
            <div>
                <ListContainer>
                    {this.props.list.map((text: string, key: number) =>
                        <ListDetail text={text} key={key} index={key}/>
                    )}
                </ListContainer>
                <Route path='/detail/:id' component={Detail} />
            </div>
        )
    }

    componentDidMount() {
        console.log('--- List componentDidMount', this.props);
        this.props.getList()
    }
}