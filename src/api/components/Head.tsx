import * as React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

interface Props {
    handleToggle: () => void
    drawerOpen: boolean
}

export default class Head extends React.Component<Props, {}> {

    render() {
        return (
            <div>
                <AppBar
                    title="タイトルです"
                    onLeftIconButtonTouchTap={this.props.handleToggle}
                />
                <Drawer open={this.props.drawerOpen}>
                    <MenuItem onClick={this.props.handleToggle}>Menu Item</MenuItem>
                    <MenuItem onClick={this.props.handleToggle}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }

}