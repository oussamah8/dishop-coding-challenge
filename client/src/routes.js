import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/home'
import Movies from './pages/Movies/movies'
import Series from './pages/Series/series'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path={["/", "/home"]} exact component={Home} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/series" exact component={Series} />
            </Switch>
        )
    }
}

export default Routes;