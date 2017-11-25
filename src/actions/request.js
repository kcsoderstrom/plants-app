import Actions from './ActionCreators';

/**
 * Timout requsest after 30 seconds
 * TODO this timeout should be replaced
 */
function onRequestTimout(dispatch) {
    return setTimeout(() => {
        dispatch(Actions.requestError({message: 'Request timed out.'}))
        throw('actions/reqest.js, getWrappedRequest function: request timed out')
    }, 30000);
}

/**
 * Wraps an api requests handling error and success dispatches.
 * Also handles getting token from state and passing to request.
 */
export function getWrappedRequest(requestContainerFunction, options = {}) {
    return async (dispatch, getState) => {
        const state = getState();
        const { token } = state.session;
        let timeout = null;
        dispatch(Actions.requestPending())
        try {
            if (!options.preventTimeout) {
                timeout = onRequestTimout(dispatch)
            }
            
            const result = await requestContainerFunction(dispatch, getState, token);
            clearTimeout(timeout);
            dispatch(Actions.requestSuccess({message: options.successMessage}))
            return result;
        } catch(error) {
            clearTimeout(timeout);
            dispatch(Actions.requestError({message: options.errorMessage}))
            throw('actions/reqest.js, getWrappedRequest function: error in reqeust', error)
        }
    }
}