import * as React from 'react'
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';

interface Props {
    index: number
    text: string
}

export default class ListDetail extends React.Component<Props, {}> {
    render() {
        return (
            <ListItem primaryText={<Link to={'/detail/'+this.props.index}>{this.props.text}</Link>} leftIcon={<ActionGrade />} />
        )
    }
}