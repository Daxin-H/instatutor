import {SET_ALERT, REMOVE_ALERT} from '../actions/types';

const initialState = [];

//Reducer - takes current state and action and returns new state
export default function(state = initialState, action){
    //destructuring 
    const{type, payload} = action;
    //actions for different alert types
    switch(type){
        case SET_ALERT:
            //... -> spread operator which adds element to array
            //used bc existing state is immutable
            return [...state, payload];
        //remove alert by ID
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}