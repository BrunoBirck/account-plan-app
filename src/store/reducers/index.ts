import { combineReducers } from 'redux';
import accountPlansReducer from './accountPlanReducer';

export default combineReducers({
    accountPlans: accountPlansReducer
});