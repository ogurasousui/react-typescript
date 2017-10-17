import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from './store/configureStore';
import CommentList from './components/CommentList';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <CommentList />
    </Provider>,
    document.getElementById('container')
);