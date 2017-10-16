import * as React from 'react';
import Square from "./square";

interface BoardProps {
    squares: string[];
    onClick: (x:number, y:number) => void;
}

export default class Board extends React.Component<BoardProps, {}> {

    renderSquare(x: number, y: number) {
        return <Square value={this.props.squares[x][y]} onClick={() => this.props.onClick(x, y)} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(2, 0)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(2, 1)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0, 2)}
                    {this.renderSquare(1, 2)}
                    {this.renderSquare(2, 2)}
                </div>
            </div>
        );
    }

}