import * as React from "react"
import thunk from 'redux-thunk'
import * as ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import List from "./containers/List"

import reducers from './reducers/index'

let store = createStore(
    reducers,
    applyMiddleware(thunk))

let rootElement = document.getElementById('container')
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route path="/" component={List} />
        </Provider>
    </Router>,
    rootElement);