import {v1 as uuid} from 'uuid'
import {SET_ALERT, REMOVE_ALERT} from './types';

//dispatch from thunk middleware
//setAlert action -> updates state to set an alert
export const setAlert = (msg, alertType) => dispatch => {
    //get universal ID for alert from uuid package
    const id = uuid.v4();
    //gets state from './reducers/alert.js'
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    });
};