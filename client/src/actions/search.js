import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_MATCH_PROFILES,
    GET_MATCH_PROFILE_ERROR
} from './types';


export const getTutors = (subject) => async (dispatch) => {
    try {
        console.log("get Tutors")
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(subject)

        const res = await axios.get('/api/profile/expertise', body, config);
        dispatch({
            type: GET_MATCH_PROFILES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_MATCH_PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};