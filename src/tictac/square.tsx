import * as React from 'react';

interface SquareProps {
    value: any;
    onClick: () => void;
}

interface SquareState {
    value: string;
}

export default class Square extends React.Component<SquareProps, SquareState> {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                <div>{this.props.value}</div>
            </button>
        );
    }
}