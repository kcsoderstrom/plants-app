import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, FormGroup, ControlLabel } from 'react-bootstrap';
import BootstrapFromGroup from './BoostrapFormGroup';
import map from 'lodash/map';
import zipObject from 'lodash/zipObject';

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
class BootstrapCheckbox extends Component {
  static propTypes = {
    type:        PropTypes.string,
    name:        PropTypes.string,
    value:       PropTypes.array,
    placeholder: PropTypes.string,
    checked:     PropTypes.string,
    onChange:    PropTypes.func,
  };

  onChange(val) {
    const { value, onChange } = this.props;
    const newValue = value.slice(0)
    const index = newValue.indexOf(val);
    if (index === -1) {
      newValue.push(val);
    } else {
      newValue.splice(index, 1);
    }
    onChange(newValue);
  }

  render () {
    const { 
      label, 
      type, 
      name, 
      placeholder, 
      text, 
      checked, 
      error, 
      errorMessage, 
      disabled, 
      checkBoxes ,
      value,
    } = this.props;

    if (!Array.isArray(value)) {
      throw('BoostrapCheckbox.js, render function; value must be an array')
    }

    const keyedByCheckBoxObj = zipObject(value, map(value, () => true));

    return (
      <BootstrapFromGroup 
        error={error}
        errorMessage={errorMessage}
      >
        <ControlLabel>{ label }</ControlLabel>
        <div>
        {
          map(checkBoxes, val => {
            return (
              <Checkbox type={         type}
                        key={val}
                        checked={      !!keyedByCheckBoxObj[val]}
                        name={         name}
                        disabled={     disabled}
                        placeholder={  placeholder}
                        onChange={     (e) => this.onChange(val)}>
                { val }
              </Checkbox>
            )
          })
        }
        </div>
      </BootstrapFromGroup>
    )
  }
}


export default BootstrapCheckbox;
