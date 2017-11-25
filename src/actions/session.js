import ActionCreators from './ActionCreators';
import * as requests from '../requests';
import { getWrappedRequest } from './request';

export function logout() {
    return (dispatch, getState) => {
        dispatch(ActionCreators.logout());
    }
}

export function login(inputsObj) {
    const { email, password } = inputsObj;
    const options = {
        errorMessage: 'Your email or password is incorrect. Please try again.'
    }

    return getWrappedRequest((dispatch, getState) => {
        return requests.login(email, password).then(results => 
                    dispatch(ActionCreators.login(results)))
    }, options)
}

