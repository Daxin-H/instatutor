import axios from 'axios'
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_ALERT
}from './types'
import { setAlert } from './alert';

<<<<<<< Updated upstream
export const register = ({name, email, password}) => async dispatch => {
=======
// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};



// Register User
export const register = ({ name, email, role, password, expertise, subjects, year }) => async dispatch => {
>>>>>>> Stashed changes
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


<<<<<<< Updated upstream
const body = JSON.stringify({name, email, password});
=======
    const body = JSON.stringify({ name, email, role, password, expertise, subjects, year }); 
>>>>>>> Stashed changes

    try{
        const res = await axios.post('api/users', body, config);
        console.log("AXIOS: ", res.data)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch(err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}