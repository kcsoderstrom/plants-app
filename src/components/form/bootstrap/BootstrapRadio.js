import React, { Component, PropTypes } from 'react';
import { option, FormGroup, ControlLabel, FormControl, Radio, ButtonGroup } from 'react-bootstrap';
import map from 'lodash/map';
import ReactDOM   from 'react-dom';
import BootstrapFromGroup from './BoostrapFormGroup';

/**
 * Bootstrap form group supports
 * https://react-bootstrap.github.io/components.html#forms-controls
 *
 * Selection
 *
 */
class BootstrapRadio extends Component {
  static propTypes = {
    label:       PropTypes.string,
    id:          PropTypes.string,
    disabled:    PropTypes.bool,
    options:     PropTypes.array,
    selected:    PropTypes.string,
    name:        PropTypes.string,
    placeholder: PropTypes.string,
    className:   PropTypes.string,
    onChange:    PropTypes.func,
    onBlur:      PropTypes.func,
  };

  getOptions () {
    const { value, options, onChange, name, disabled } = this.props;

    return map(options, (option) => {
      let isSelected = value === option;
  
      return (
        <Radio key={option}
               disabled={disabled}
                checked={ isSelected }
                value={option}>{ option }</Radio>
      )
    })
  }

  render () {
    const { label, placeholder, id, onBlur, onChange, disabled, className, error, errorMessage } = this.props;

    return (
      <BootstrapFromGroup 
        error={error}
        errorMessage={errorMessage}
        controlId={ id }
      >
        <ControlLabel style={{display: 'block'}}>{ label }</ControlLabel>
        <ButtonGroup
              componentClass="radio"
                  onChange={ e => {
                    onChange(e.target.value) }
                  }
                  className={className}
                  onBlur={onBlur}
                  disabled={ disabled }
                  placeholder={ placeholder }>
          { this.getOptions() }
        </ButtonGroup>
      </BootstrapFromGroup>
    )
  }
}


export default BootstrapRadio;
