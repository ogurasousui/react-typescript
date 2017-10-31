import * as React from 'react'
import { Route } from 'react-router-dom'
import List from "../containers/List"
import Detail from "../containers/Detail"

export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Route exact path='/' component={List} />
                <Route path='/detail/:id' component={Detail} />
            </div>
        )
    }
}