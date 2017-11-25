import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as Session from '../../actions/session';
import ErrorBanner from './errorBanner';

import './banner.css';

class Login extends React.Component {

    componentWillMount() {
        this.state = {
            isVisible: false
        }
    }

    componentDidUpdate(nextProps) {
        const {
            isRequestError,
            isRequestSuccess,
            message,
            errorsOnly
        } = this.props;

        const nextMessage = nextProps.message;

        if (message === nextMessage) {
            return;
        }

        const isErrorOrSuccess = isRequestError || (isRequestSuccess && !errorsOnly)
        const isVisible = message && isErrorOrSuccess;

        this.setState({isVisible})

        if (message && isRequestSuccess) {
            setTimeout(() => {
                this.setState({isVisible: false})
            }, 8000);
        } else if (message && isRequestError) {
            setTimeout(() => {
                this.setState({isVisible: false})
            }, 20000);
        }

    }

    render() {
        const {
            isRequestError,
            isRequestSuccess,
            message,
            className,
            errorsOnly
        } = this.props;

        const { isVisible } = this.state;
        const classString =
            `${isRequestError ? 'error' : ''}
            ${isRequestSuccess ? 'success' : ''}
            ${isVisible ? 'visible' : ''}`

        return (
            <div className={`banner ${className || ''} ${classString}`}>
                <ErrorBanner text={message}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        isRequestError,
        isRequestSuccess,
        message,
    } = state.appState.request
  return {
    isRequestError,
    isRequestSuccess,
    message
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);