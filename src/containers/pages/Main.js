import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppContainer from '../../components/AppContainer';
import { routeToAfterLogin, routePaths } from '../../routes';

const MainPage = props => {
    const { history, navigateLocation } = props;
    const navigateAfterLogin = () => history.push(routePaths.viewProjects)
    return (
        <AppContainer>
            Main page
        </AppContainer>
    )
}


const mapStateToProps = (state) => {
  return {
      navigateLocation: state.session.loginAttemptRoute || routeToAfterLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
