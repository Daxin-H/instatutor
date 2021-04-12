<<<<<<< Updated upstream
import {combineReducers} from 'redux'
import alert from './alert'
export default combineReducers({});
=======
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import search from './search';


export default combineReducers({
    alert,
    auth,
    profile,
    search

});
>>>>>>> Stashed changes
