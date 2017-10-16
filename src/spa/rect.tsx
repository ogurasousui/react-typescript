import * as React from 'react';

interface Props {
    num: number;
    bgcolor: string;
}

interface State {
    number: number;
}

export default class Rect extends React.Component<Props, State> {

    protected rectStyle: {};

    constructor (props: Props) {
        super(props);
        // ステートオブジェクト
        this.state = { number : this.props.num };
    }

    componentWillMount () {
        // propsに属性値が渡ってくる
        const { num, bgcolor } = this.props;

        console.log(num);

        // CSS スタイルはキャメルケースでプロパティを書く
        this.rectStyle = {
            background: bgcolor,
            display: 'table-cell',
            border: '1px #000 solid',
            fontSize: 20,
            width: 30,
            height: 30,
            textAlign: 'center',
            verticalAlign: 'center',
        }

    }

    // カウントアップ
    countUp (num: number) {
        // ステートオブジェクトのパラメータを更新→renderメソッドが呼ばれ、再描画される
        this.setState({ number : num + 1 })
    }

    render () {

        // 複数行になる場合は()で囲む
        // 返却する最上位のDOMは１つのみ
        return (
            <div style={ this.rectStyle } onClick={(e)=> this.countUp(this.state.number)}>
                <span style={{ color : '#eeeeee' }}>{this.state.number}</span>
            </div>
        )
    }

}