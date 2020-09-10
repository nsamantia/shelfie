import React from 'react'
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'
import {Switch, Route} from 'react-router-dom'

export default(
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form} />

    </Switch>
)