import * as React from 'react';
import Board from "./board";

interface GameState {
    stepNumber: number;
    history: any;
    xIsNext: boolean;
}

export default class Game extends React.Component<{}, GameState> {

    protected readonly lengthX: number = 3;
    protected readonly lengthY: number = 3;

    constructor() {
        super();

        this.state = {
            stepNumber: 0,
            history: [{
                squares: this.createSquare()
            }],
            xIsNext: true
        };
    }

    protected createSquare(): string[][]
    {
        // set square
        let square: string[][] = [];
        for (let x = 0; x < this.lengthX; x ++)
        {
            square[x] = [];
            for (let y = 0; y < this.lengthY; y ++)
            {
                square[x][y] = '';
            }
        }
        console.log('createSquare', square);
        return square;
    }

    render() {
        // console.log('game render', this.state.stepNumber, this.state.history);

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        // const current = history[history.length - 1];
        const winner = this.calculateWinner(current.squares);

        // console.log(current, history);


        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((step: any, move: any) => {
            const desc = move ?
                'Move #' + move :
                'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(x, y) => this.handleClick(x, y)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    jumpTo(step:number)
    {
        this.setState({
            stepNumber: step,
            xIsNext: !(step % 2),
        });
    }


    handleClick(x: number, y: number) {

        // deep copyできねーぞオラアアン
        // console.log('game handle click', x, y);

        let history = this.state.history;
        let current = history[history.length - 1];
        const squareX: any = current.squares.concat();
        const squares: string[][] = squareX.concat();

        console.log(squares);
        console.log(history);

        if (this.calculateWinner(squares) || squares[x][y]) {
            return;
        }

        squares[x][y] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            stepNumber: this.state.stepNumber + 1,
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    calculateWinner(squares: string[][]) {
        return null;

        // const lines = [
        //     [0, 1, 2],
        //     [3, 4, 5],
        //     [6, 7, 8],
        //     [0, 3, 6],
        //     [1, 4, 7],
        //     [2, 5, 8],
        //     [0, 4, 8],
        //     [2, 4, 6],
        // ];
        // for (let i = 0; i < lines.length; i++) {
        //     const [a, b, c] = lines[i];
        //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        //         return squares[a];
        //     }
        // }
        // return null;
    }
}