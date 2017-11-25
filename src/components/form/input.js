import React, { Component, PropTypes } from 'react';


class TextInput extends Component {
  static propTypes = {
    label:        PropTypes.string,
    note:         PropTypes.string,
    idName:       PropTypes.string,
    type:         PropTypes.string,
    inputClass:   PropTypes.string,
    value:        PropTypes.string,
    placeholder:  PropTypes.string,
    name:         PropTypes.string,
    idName:       PropTypes.string,
    className:  PropTypes.string,
    onChange:     PropTypes.func,
    onFocus:      PropTypes.func,
    onBlur:       PropTypes.func,
    onKeyUp:      PropTypes.func
  };

  render () {
    let {
        label,
        idName,
        type,
        value,
        placeholder,
        onChange,
        onFocus,
        onBlur,
        onKeyUp,
        onKeyDown,
        inputClass,
        className,
        name,
        error,
        valid,
      } = this.props;

    if (error) {
      inputClass += " has-error"
    }

    if (valid) {
      inputClass += " is-valid"
    }

    return (
      <div className={className}>
        <label htmlFor={idName}>{label}</label>
        <input id={idName}
               className={inputClass}
               name={name}
               type={type}
               value={value || ''}
               placeholder={placeholder}
               onChange={(e) => onChange(e.target.value, e)}
               onFocus={onFocus}
               onBlur={onBlur}
               onKeyDown={onKeyDown}
               onKeyUp={onKeyUp}
               ref={(ref) => this._input = ref}/>
      </div>
    )
  }
}


export default TextInput;
