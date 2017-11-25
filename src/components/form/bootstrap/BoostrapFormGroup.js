import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

//TODO add validation input
/**
 * Bootstrap form group supports
 * https://react-bootstrap.github.io/components.html#forms-controls
 *
 * Input types supported:
 *
 * -  input
 * -  textarea

 */
class BootstrapFormControl extends Component {
  static propTypes = {
    label:       PropTypes.string,
    type:        PropTypes.string,
    name:        PropTypes.string,
    value:       PropTypes.string,
    placeholder: PropTypes.string,
    onChange:    PropTypes.func
  };


  render () {
    const { error, errorMessage } = this.props;

    return (
      <FormGroup 
        { ...this.props}
        validationState={error ? 'error' : null}>
        {this.props.children}
        { error ? <p className="input-error-message">{errorMessage}</p> : null}
      </FormGroup>
    )
  }
}


export default BootstrapFormControl;
