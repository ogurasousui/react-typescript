import * as React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import PostTime from "../containers/PostTime";

export default class App extends React.Component<{}, {}> {
    render() {
        console.log('@@@@ component App', this.props);

        // 基本的にはコンテナをレンダリングする？
        // 特に動きの無いやつはcomponentなのか？
        return (
            <div>
                <PostTime setTime={'124'}/>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}