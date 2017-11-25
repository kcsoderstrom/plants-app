import React, { Component, PropTypes } from 'react';
import { option, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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
class BootstrapSelect extends Component {
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
    const { selected, options, onChange, name } = this.props;

    return map(options, (option) => {
      let isSelected = selected === option;

      return (
        <option key={option}
                selected={ isSelected }
                value={option}>{ option }</option>
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
        <ControlLabel>{ label }</ControlLabel>
        <FormControl componentClass="select"
                     onChange={ e => {
                       onChange(e.target.value) }
                     }
                     className={className}
                     onBlur={onBlur}
                     disabled={ disabled }
                     placeholder={ placeholder }>
          { this.getOptions() }
        </FormControl>
      </BootstrapFromGroup>
    )
  }
}


export default BootstrapSelect;
