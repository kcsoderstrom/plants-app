import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import BootstrapFromGroup from './BoostrapFormGroup';

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
class BoostrapFormInputs extends Component {
  static propTypes = {
    label:       PropTypes.string,
    type:        PropTypes.string,
    name:        PropTypes.string,
    value:       PropTypes.any,
    placeholder: PropTypes.string,
    onChange:    PropTypes.func
  };

  onChange(e) {
    const { type, onChange } = this.props;
    const value = type === 'file' ? e.target.files[0] : e.target.value
    onChange(value);
  }


  render () {
    const { label, type, name, placeholder, value, error, errorMessage, disabled } = this.props;
    let val = null;
    if (value && typeof value.name == 'string') {
      val = undefined
    } else {
      val = value;
    }

    return (
      <BootstrapFromGroup 
        error={error}
        errorMessage={errorMessage}
      >
        <ControlLabel>{ label }</ControlLabel>
        <FormControl type={         type}
                     name={         name}
                     value={        val}
                     disabled={     disabled}
                     placeholder={  placeholder}
                     onChange={     (e) => this.onChange(e)}/>
      </BootstrapFromGroup>
    )
  }
}


export default BoostrapFormInputs;
