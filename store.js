import {combineReducers,createStore} from 'redux'
import {reducer as FormReducer} from 'redux-form'
const Reducer=combineReducers({
    form:FormReducer
});
const store =createStore(Reducer);
export default store