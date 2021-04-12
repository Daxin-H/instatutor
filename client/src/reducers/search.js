import {GET_MATCH_PROFILES, GET_MATCH_PROFILE_ERROR } from '../actions/types';

const initialState = {
    search: null,
    match_profiles: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MATCH_PROFILES:
            return {
                ...state,
                search: payload,
                loading: false
            };

        case GET_MATCH_PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}