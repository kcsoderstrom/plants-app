import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import BootstrapFromGroup from './BoostrapFormGroup';

class BoostrapTextArea extends Component {
  static propTypes = {
    label:       PropTypes.string,
    type:        PropTypes.string,
    name:        PropTypes.string,
    value:       PropTypes.any,
    placeholder: PropTypes.string,
    onChange:    PropTypes.func
  };

  render () {
    const { 
      label, 
      type, 
      name, 
      placeholder, 
      value, 
      error, 
      errorMessage, 
      disabled ,
      onChange
    } = this.props;

    return (
      <BootstrapFromGroup 
        error={error}
        errorMessage={errorMessage}
      >
        <ControlLabel>{ label }</ControlLabel>
        
        <FormControl componentClass="textarea"
                     name={         name}
                     value={        value}
                     disabled={     disabled}
                     placeholder={  placeholder}
                     onChange={     (e) => onChange(e.target.value)}/>
      </BootstrapFromGroup>
    )
  }
}


export default BoostrapTextArea;
