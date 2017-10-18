import * as React from 'react'

interface Props {
    setTime: string
}

export default class PostTime extends React.Component<Props, {}> {

    render() {
        return (
            <div>XXXX:{this.props.setTime}</div>
        )
    }
}