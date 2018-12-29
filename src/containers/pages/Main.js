import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppContainer from '../../components/AppContainer';
import QuestionPage from '../../components/QuestionPage';
// import { routeToAfterLogin, routePaths } from '../../routes';
import { routeToAfterLogin } from '../../routes';

const MainPage = props => {
  // const { history } = props;
  // const navigateAfterLogin = () => history.push(routePaths.viewProjects)
  return (
    <AppContainer>
      <QuestionPage/>
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
