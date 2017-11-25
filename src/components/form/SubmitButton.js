import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

  //TODO: add error logs
class BootstrapForm extends Component {
  static propTypes = {
    isLoading:        PropTypes.bool,
    onClick:          PropTypes.func
  };

  render () {
    const { onClick, isLoading, text, disabled } = this.props;
    return (
      <Button 
        onClick={ onClick } 
        disabled={disabled}
        bsStyle="primary">
          <div className="button-container">
            { text }
            { isLoading ? <div
              className="circular-loader"></div> : null }
          
          </div>
        { this.props.children }
      </Button>
    )
  }
}


export default BootstrapForm;
