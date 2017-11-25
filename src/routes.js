import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import includes from 'lodash/includes';
import ActionCreators from './actions/ActionCreators';
import { instance as store } from './store/storeInstance';
import Main from './containers/pages/Main'

// -- PLOP APPEND IMPORT --

export const routePaths = {
    base: '/',
//-- PLOP APPEND ROUTE PATH --
}

export const routeToAfterLogin = routePaths.viewProjects;

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    const state = store.getState();
    const isAuthorized = state.session.isLoggedIn
    const { pathname } = props.location;
    const isNotLoginRoute = pathname !== routePaths.login;

    // save the route route the user attempted to navigate to
    if (!isAuthorized && isNotLoginRoute && includes(routePaths, pathname)) {
        const { loginAttemptRoute } = ActionCreators;
        const { dispatch } = store;

        dispatch(loginAttemptRoute(pathname));
    }

    // render the component or redirect to login
    return (
        isAuthorized ? (
        <Component {...props}/>
        ) : (
        <Redirect to={{
            pathname: routePaths.login,
            state: { from: props.location }
        }}/>
    )
  )}}/>
)

const NotFound = props => {
    return <div>Not Found</div>
}

export const router = (
    <Router>
        <Switch>
             {/* -- PLOP APPEND ROUTE --*/}
             {/* -- PLOP APPEND AUTHROUTE --*/}
            <Route path={routePaths.base} component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)