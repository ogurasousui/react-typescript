import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import * as React from 'react'
import { Route } from 'react-router-dom'
import List from "../containers/List"
import Detail from "../containers/Detail"
import Head from "../containers/Head"

export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Head />
                    <Route exact path='/' component={List} />
                    <Route path='/detail/:id' component={Detail} />
                </div>
            </MuiThemeProvider>
        )
    }
}