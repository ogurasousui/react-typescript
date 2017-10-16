import * as React from 'react';
// import { connect } from 'react-redux';
// コメントreducerのactionを取得
// import { load } from './comment'

/**
// connectのdecorator
@connect(
    state => ({
        // reducerで受け取った結果をpropsに返却する
        comments: state.comment.comments
    }),
    // actionを指定
    { load }
)
 **/

interface AppProps
{
    comments: any;
    load: () => {};
}

// function mapStateToProps(state: any) {
//     return { todos: state.todos };
// }
//
// function mapDispatchToProps(dispatch: any) {
//     return { load };
// }
//
//@connect(mapStateToProps, mapDispatchToProps)

export default class App extends React.Component<AppProps, {}> {

    constructor() {
        super();


    }

    componentWillMount() {
        // コメントのactionをキックする
        this.props.load();
    }

    render () {
        // connectで取得したstateはpropsに入る
        const { comments } = this.props;
        // 初回はnullが返ってくる（initialState）、処理完了後に再度結果が返ってくる
        console.log(comments);
        return (
            <div>{comments}</div>
        )
    }
}