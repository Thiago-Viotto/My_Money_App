import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// import Dashboard from '../Dashboard2/dashboard2' //without Redux 
import Dashboard from '../Dashboard/dashboard' //with Redux 
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)
