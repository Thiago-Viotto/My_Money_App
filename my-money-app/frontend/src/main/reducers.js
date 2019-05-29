import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import DashboardReducer from '../Dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclesReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesReducer,
    form: formReducer
})

export default rootReducer

