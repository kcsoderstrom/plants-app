import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, FormGroup, ControlLabel } from 'react-bootstrap';
import BootstrapFromGroup from './BoostrapFormGroup';
import map from 'lodash/map';
import zipObject from 'lodash/zipObject';

import './BoostrapCheckboxHidden.css';

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

  componentWillMount() {
    this.state = {
      isOpen: false
    }

    document.addEventListener('click', this.closeOnClickOutOfList.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeOnClickOutOfList.bind(this), false);
  }

  getDomNode() {
    const target = this.refs.container;
    return ReactDOM.findDOMNode(target);
  }

  /*
   * Handles closing the drop down if a click
   * is registered outside of component.
   */
  closeOnClickOutOfList(event) {
    const { isOpen } = this.state;
    const targetElement = this.getDomNode();

    let isInside = false;

    if (targetElement) {
      isInside = targetElement.contains(event.target) || targetElement === event.target;
    }

    if (!isInside && isOpen) {
      this.setState({isOpen: false});
    }
  }

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

    const {
      isOpen
    } = this.state;

    if (!Array.isArray(value)) {
      throw('BoostrapCheckbox.js, render function; value must be an array')
    }

    const keyedByCheckBoxObj = zipObject(value, map(value, () => true));

    return (
      <div ref="container">
        <BootstrapFromGroup 
          error={error}
          errorMessage={errorMessage}
        >
          <ControlLabel>{ label }</ControlLabel>
            {
            map(value, val => {
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
          <div className={`checkbox-container ${!isOpen ? 'closed' : ''}`}>
            <div 
              onClick={() => !disabled && this.setState({isOpen: !this.state.isOpen})}
            >
              <h2 
                className="checkbox-select"
              >
                Select media
              </h2>
              <img 
                className="checkbox-arrow"
                src="/images/down-arrow.svg"/>
            </div>
            <div className="checkbox-scroll-container">
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
          </div>
        </BootstrapFromGroup>
      </div>
    )
  }
}


export default BootstrapCheckbox;
