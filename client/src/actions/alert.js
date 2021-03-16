import {SET_ALERT, REMOVE_ALERT} from './types';
const { uuid } = require('uuidv4');

//dispatch from thunk middleware
//setAlert action -> updates state to set an alert
export const setAlert = (msg, alertType) => dispatch => {
    //get universal ID for alert from uuid package
    const id = uuid();
    //gets state from './reducers/alert.js'
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    });
};