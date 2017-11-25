import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import SubmitButton from './SubmitButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FormActions from '../../actions/forms';
import Actions from '../../actions/ActionCreators';
import isEqual from 'lodash/isEqual';
import differenceWith from 'lodash/differenceWith';
import keyBy from 'lodash/keyBy';
import each from 'lodash/each';
import map from 'lodash/map';
import isFunction from 'lodash/isFunction';

/**
 * Form Factory:
 * Pass an array of input configs to quickly spin
 * up a form.
 *
 * basic usage as react element
 * <FormFactory
 *  formName={formName}
 *  className="form-elements"
 *  formInputs={formInputs}
 *  submit={submit}
 * />
 *
 * formName: is a the unique name of the form.
 * className: optional.
 * formInputs: the configuration of form elements. more below.
 * submit: the submit function that runs on click of the submit button.
 *
 * If there is a need for custom form elements pass in an object
 * in the key alternateInputs with keys ass the form types and
 * values as the element constructors.
 *
 * formName:
 * This is a required prop because it creates a unique key in state.forms.
 * The values for the form inputs are stored under this key and populate
 * the form inputs values.
 *
 * Errors are captured in the same way under state.forms.errorsYourFormName.
 * See reducer/forms.js and actions/forms.js
 *
 * Form Inputs:
 * Generally all values in the form config objects will be passed as
 * props to the form elements. so if you need an onClick or some unique value,
 * add it to the form config object.
 *
 * example form input configs:
 *
 * let formInputs = [
 *  {
 *    type: 'email',
 *    label: 'Username',
 *    name: 'username',
 *    placeholder: 'Username'
 *  },
 *  {
 *    type: 'password',
 *    label: 'Password',
 *    name: 'password',
 *    information: 'some info' // this can be passed to get an info icon and
 * bubble placeholder: 'Password'
 *  }
 * ];
 *
 * The name field can be a space separated list of values.
 * This will nest the name and input value one level for
 * each value added to the list.
 *
 * This allows nesting multiple input fields under one key
 * example:
 *
 * let formInputs = [
 *  {
 *    type: 'email',
 *    label: 'Username',
 *    name: 'userInfo.username',
 *    placeholder: 'Username'
 *  },
 *  {
 *    type: 'password',
 *    label: 'Password',
 *    name: 'userInfo.password',
 *    placeholder: 'Password'
 *  }
 * ];
 *
 * output after user has entered information:
 *
 * {
 *    userInfo: {
 *                username: 'mr_poopy_pants'
 *                password: 'not your biz'
 *               }
 * }
 *
 * There are other types that can be passed as objects in the form config.
 *  other types:
 *      container     - contains several inputs to create columns with, for
 * example a two-column class button        - creates a button link          -
 * creates a link element submitButton  - this button will be passed the submit
 * function
 *
 *
 * Adding a submit button.
 * the submit function should not be passe to the submit button
 * {
 *  type: 'submitButton'
 *  text: 'submit'
 * }
 *
 * Container example:
 * }
 *  type: 'container',
 *  className: 'two-column',
 *  formInputs: [
 *    {
 *      type: 'email',
 *      label: 'Username',
 *      name: 'username.first', // can do deep nesting
 *      placeholder: 'Username',
 *    },
 *    {
 *      type: 'email',
 *      label: 'Username',
 *      name: 'username',
 *      placeholder: 'Username',
 *    },
 *    {
 *      type: 'button',
 *      text: 'Sign In',
 *      className: 'sf-button',
 *    },
 *  ],
 * },
 *
 * What fields are passed to components:
 *
 * FormFactory uses the following fields:
 *
 * name - will be the key in state.forms.formName
 * value - will be the vlaue associated with name in state.forms.formName
 * validate - array of validation types to run against the value field. add validation in actions/forms
 * onChange - this handles the values inputted by the user
 *
 * generally all filds that are added to an input object are passed as props to components.
 *
 * Additionally if you are using the validate field FormFactory will pass:
 * error - bool
 * errorMessage - if validation message this value will be passed to the component. it is stored in state.forms.errorFormName
 *
 * The values stored in redux can be manipulated with functions from actions/forms.
 *
 * NB: If you are building a component whatever is passed to onChange will be stored as the inputs value wether
 * it be a string, an array or an object.
 *
 * For other important pieces to FormFactory:
 * See actions/forms
 * See reducres/forms
 *
 */

class FormFactory extends Component {
  static propTypes = {
    formInputs: PropTypes.array.isRequired,
    formName: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired,
    submitButtonText: PropTypes.string,
    className: PropTypes.string,
    updateField: PropTypes.func,
    validateInputs: PropTypes.func,
    getFormContent: PropTypes.func,
    isLoading: PropTypes.bool,
    children: PropTypes.any,
    formsState: PropTypes.object,

    // Object of alternate input constructors.
    alternateInputs: PropTypes.object,
  };

  static state = {
    fresh: true,
    currentActiveInput: null,
  }

  componentWillMount() {
    const { formInputs, setDefaultFormFields, formName } = this.props;
    this.state = FormFactory.state;
    setDefaultFormFields(formName, formInputs);
  }

  componentDidUpdate(nextProps) {
      const {
          formInputs,
          setDefaultFormFields,
          formName,
          removeDefaultFormFields
        } = this.props;

      const nextFormInputs = nextProps.formInputs;
      const inputsToRemove = differenceWith(nextFormInputs, formInputs, isEqual);
      const newInputsToAdd = differenceWith(formInputs, nextFormInputs, isEqual);

      setDefaultFormFields(formName, newInputsToAdd);
      removeDefaultFormFields(formName, inputsToRemove);
  }

  componentDidMount() {
    this.setState({fresh: true});
    this.isValid();
  }

  getInputs() {
    return {
      submitButton: SubmitButton,
    };
  }

  /**
   * Gets the input constructor.
   *
   * @param type
   * @returns {*}
     */
  getInput(type) {
    let inputType = type;
    const inputs = this.getInputs();
    const alternateInputs = this.props.alternateInputs;

    // text email and password share the same type of input
    const textInputReg = /text|email|password|file|number|date/g;
    if (textInputReg.test(inputType) && !alternateInputs[inputType]) {
      inputType = 'textInput';
    }

    // choose from custom inputs or generic inputs
    return alternateInputs && alternateInputs[inputType] || inputs[inputType];
  }

  /**
   * Run on click of submit button.
   * @param e
   */
  submit(e) {
    e.preventDefault();

    const { submit, validateInputs, formName, formInputs, getFormContent } = this.props;
    const isValid = validateInputs(formName, formInputs);
    const formContent = getFormContent(formName);

    if (isValid) {
      submit(formContent);
    }
  }

  createElement(el, props, children) {
    return React.createElement(el || 'div', props, children);
  }

  /**
   * On change function to be passed to form inputs
   * @param name
   * @param value
   */
  childOnChange(name, value) {
    const { updateField, formName } = this.props;
    updateField({ formName, name, value });
    this.setState({fresh: false})
    this.isValid();
  }

  /**
   * Adds a container if you want multiple columns.
   * the input className can be:
   *    two-column
   *    three-column
   *    four-column
   *
   * @param item
   * @returns {XML}
     */
  renderContainer(item, i) {
    const inputs = this.renderFormInputs(item.formInputs);

    return (
      <div
        key={item.className + i}
        className={`ff-container ${item.className}`}
      >
        {inputs}
      </div>
    );
  }

  /**
   * Renders inputs from config
   * @returns {*}
   */
  renderFormInputs(formInputs) {
    const { formsState, formName } = this.props;

    let values;
    let errors;
    let el;

    if (formsState) {
      values = formsState[formName];
      errors = formsState[`error${formName}`];
    }
    let inputEl;
    let props;

    // create elements of form inputs
    return map(formInputs, (item, i) => {
      if (!item) {
        return;
      }

      if (React.isValidElement(item)) {
        console.log("this is a valid react el", item);
          return item;
      }

      if (item.type === 'container') {
        return this.renderContainer(item, i);
      }

      inputEl = this.getInput(item.type);

      if (inputEl) {
        // these props will get passed to all form elements
        const { fresh, currentActiveInput } = this.state;
        const inputValue = values && get(values, item.name) || null;
        const defaultValue = item.value || null;
        const isFreshOrNotActive = fresh || currentActiveInput !== item.name;
        let currentValue = isFreshOrNotActive ? inputValue || defaultValue : inputValue;

        props = {
          ...item,
          error: errors && !!get(errors, item.name),
          errorMessage: errors && get(errors, item.name),
          value: currentValue,
          disabled: this.props.disabled || item.disabled,
          key: i,
          onBlur: () => {
            item.onBlur ? item.onBlur() : null;
            if (isFreshOrNotActive) {
              return;
            }

            this.props.validateInputs(formName, [{
              value: currentValue,
              name: item.name,
              validate: item.validate
            }])
          },
          onChange: (value) => {
            let newValue = value;
            if (item.onChange) {
              const nextValue = item.onChange(value);
              newValue = nextValue || newValue;
            }

            this.childOnChange(item.name, newValue);
          },
        }

        if (item.formInputs) {
          props.children = this.renderFormInputs(item.formInputs);
        }

        if (item.type === 'submitButton') {
          props.onClick = (e) => {
            this.submit(e);
            if (item.onClick) {
              item.onClick(e);
            }
          }
        }

        el = this.createElement(inputEl, props, item.children);

        return el;
      }

      return null;
    });
  }

  isValid() {
    const { isFormValid, onValid, formName, formInputs } = this.props;
    const isValid = isFormValid(formName, formInputs);
    onValid ? onValid(isValid) : null;
    this.setState({
      isValid
    })
  }

  render() {
    const {
      formInputs,
      className,
      onChange,
      validateInputs,
      formName,
      formsState,
      onValid,
      isFormValid,
    } = this.props;

    return (
      <div
        className={`component-form-factory ${className || ''}`}
        onChange={() => {
            onChange ? onChange(formsState) : null;
            const isValid = isFormValid(formName, formInputs);
            onValid ? onValid(isValid) : null;
            this.setState({
              isValid
            })
          }
        }
        onFocus={(e) => this.setState({fresh: true, currentActiveInput: e.target.name})}
        onBlur={(e) =>  this.setState({fresh: true})}
      >
        {this.renderFormInputs(formInputs)}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    formsState: state.forms,
  };
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    updateField: Actions.updateField,
    validateInputs: FormActions.validateInputs,
    getFormContent: FormActions.getFormContent,
    removeDefaultFormFields: FormActions.removeDefaultFormFields,
    setDefaultFormFields: FormActions.setDefaultFormFields,
    resetField: FormActions.resetField,
    isFormValid: FormActions.isFormValid
  };

  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFactory);
