import * as React from 'react'

interface Props {
    active: boolean
    children: any
    onClick: () => {}
}

export default class Link extends React.Component<Props, {}> {
    render() {

        console.log('@@@@ component Link', this.props);

        if (this.props.active) {
            return <span>{this.props.children}</span>
        }

        return (
            <a
                href="#"
                onClick={e => {
                    e.preventDefault()
                    this.props.onClick()
                }}
            >
                {this.props.children}
            </a>
        )
    }
}
