import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import List from "./containers/List"

import reducers from './reducers/index'

let store = createStore(reducers);

let rootElement = document.getElementById('container');
ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    rootElement);