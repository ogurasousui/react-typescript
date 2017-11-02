import * as React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

interface Props {
    getMenuList: () => any
    handleToggle: () => void
    drawerOpen: boolean
    list: any[]
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
                <Drawer open={this.props.drawerOpen}>
                    {this.props.list.map((data: any, key: number) =>
                        <MenuItem key={key} onClick={this.props.handleToggle}>{data.title}</MenuItem>
                    )}
                </Drawer>
            </div>
        )
    }

    componentDidMount() {
        this.props.getMenuList()
    }
}