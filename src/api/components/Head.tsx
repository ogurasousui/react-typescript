import * as React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

interface Props {
    getMenuList: () => any
    handleToggle: () => void
    drawerOpen: boolean
    list: {path: string, title: string}[]
}

export default class Head extends React.Component<Props, {}> {

    render() {
        console.log('Head render', this.props, this.state);
        return (
            <div>
                <AppBar
                    title="タイトルです"
                    onLeftIconButtonTouchTap={this.props.handleToggle}
                />
                <Drawer
                    docked={false}
                    open={this.props.drawerOpen}
                    onRequestChange={this.props.handleToggle}
                >
                    {this.props.list.map((data: any, key: number) =>
                        <MenuItem key={key} primaryText={<Link to={data.path}>{data.title}</Link>} />
                    )}
                </Drawer>
            </div>
        )
    }

    componentDidMount() {
        this.props.getMenuList()
    }
}