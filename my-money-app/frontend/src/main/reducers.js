import {combineReducers} from 'redux'

import DashboardReducer from '../Dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer 

})

export default rootReducer

