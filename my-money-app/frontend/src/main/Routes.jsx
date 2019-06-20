import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

// import Dashboard from '../Dashboard2/dashboard2' //without Redux 
import Dashboard from '../Dashboard/dashboard' //with Redux 
import BillingCycle from '../billingCycle/billingCycle'
import App from './App'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Dashboard} />
            <Route path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
