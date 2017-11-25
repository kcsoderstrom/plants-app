import Actions from './ActionCreators';
import get from 'lodash/get';
import isObject from 'lodash/isObject';
import some from 'lodash/some';
import values from 'lodash/values';

const ONE_GIGABYTE = 1000000000;
const ONE_HUNDRED_MEGABYTES = 104857600;
/**
 * These actions are meant to work with FormFactory.js.
 *
 * The actions take care of:
 * - saving form inputs value to redux state in state.forms
 * - validating form inputs
 * - saving validatoin errors to redux state.
 *
 * These actions also provide functions for manipulating form fields:
 *
 * - setFields - sets the value of a field
 * - removeFields - removes a fild from state includeing any error state
 * - setDefaultFormFields - will set all the fields for form
 * - resetForm - resets a form including error state
 * - resetField - resets a field including error state.
 *
 * For other important pieces to this action file:
 * See reducers/forms
 * See components/form/FormFactory.js
 *
 */

function validateDeep(value) {
  const validateObj = (obj) => {
    console.log("validateObj")
    return validateArr(values(obj));
  }

  const validateArr = (arr) => {
    console.log("validateArr")
    return some(arr, val => {
      if (isObject(val)) {
        return validateObj(val)
      }

      return !!val
    })
  }

  if (isObject(value)) {
    return validateObj(value);
  } else if (Array.isArray(value)) {
    return validateArr(value);
  } else {
    return !!value;
  }
}

/**
 * Form validation
 */
const validationFuncs = {
  email: (value) => /^([a-z0-9+_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,24})$/.test(value),
  passLength: (value) => /^[a-zA-Z0-9+_-]{6,1000}$/.test(value),
  textLength: (value) => value && value.length >= 3,
  required: value => !!value,
  fileGigMax: value => value && value.size ? value.size <= ONE_GIGABYTE : true,
  file100MBMax: value => value && value.size ? value.size <= ONE_HUNDRED_MEGABYTES : true,
  requiredDeep: validateDeep,
  confirmPassword: (value, formInputs) => {
    const { password } = formInputs
    if (!password || !value) {
      return;
    }

    return value.length === password.length;
  },

  // from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  validUrl: (value) => {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return pattern.test(value);
  }
}

const validationErrorMessages = {
  email: 'Must be a valid email.',
  passLength: 'Password must be at least 6 characters.',
  required: 'This field is required.',
  confirmPassword: 'Passwords are not the same length',
  textLength: "Must be at least 3 characters long",
  fileGigMax: "File can be a max of 1 gigabyte. your file is too large.",
  file100MBMax: "File can be a max of 100 megabytes. your file is too large.",
  validUrl: "This field must contain a valid url."
}

let errorMessages = {};

/**
 * Runs the validation functions from validationFuncs on the
 * input values and adds error messages if errors.
 *
 * @param fieldName
 * @param fieldValue
 * @param validationArr
 * @returns {boolean}
 */
function validate(fieldName, fieldValue, validationArr, formInputs) {
  let isValid = true;
  let validationMessage;

  validationArr.forEach((validationKey) => {
    // TODO if wrong validation key throw error
    if (!validationFuncs[validationKey](fieldValue, formInputs)) {
      isValid = false;
      validationMessage = validationErrorMessages[validationKey];
      if (errorMessages[fieldName]) {
        errorMessages[fieldName].push(validationMessage);
      } else {
        errorMessages[fieldName] = [validationMessage];
      }
    }
  });

  return isValid;
}

/**
 * Iterates the inputs recursively if container component
 * @param formInputs
 * @param callBack
 */
function iterateInputFields(formInputs, callBack) {
  formInputs.forEach((field) => {
    if (field.formInputs) {
      iterateInputFields(field.formInputs, callBack);
    }

    if (field.validate) {
      callBack(field.name, field.validate);
    }
  });
}

/**
 * Validates the inputs that have the validate key.
 *
 * @param formName
 * @param formInputs
 * @returns {Function}
 */
export function validateInputs(formName, formInputs) {
  return (dispatch, getState) => {
    errorMessages = {};
    const forms = getState().forms;
    const form = forms[formName];
    let isAllValid = true;
    let message;
    let isValid;

    iterateInputFields(formInputs, (name, validationArr) => {
      if (!validationArr.length) {
        return;
      }

      message = '';
      isValid = validate(name, get(form, name, 'default'), validationArr, form);
      if (!isValid) {
        isAllValid = false;
        message = errorMessages[name] || '';
      }

      dispatch(Actions.updateField({
        formName: `error${formName}`,
        name,
        value: message && message.join(' '),
      }));
    });

    return isAllValid;
  };
}
/**
 * Validates the inputs that have the validate key.
 *
 * @param formName
 * @param formInputs
 * @returns {Function}
 */
export function isFormValid(formName, formInputs) {
  return (dispatch, getState) => {
    errorMessages = {};
    const forms = getState().forms;
    const form = forms[formName];
    let isAllValid = true;
    let message;
    let isValid;

    iterateInputFields(formInputs, (name, validationArr) => {
      if (!validationArr.length) {
        return;
      }

      message = '';
      isValid = validate(name, get(form, name, 'default'), validationArr, form);
      if (!isValid) {
        isAllValid = false;
        message = errorMessages[name] || '';
      }
    });

    return isAllValid;
  };
}


export function getFormContent(formName) {
  return (dispatch, getState) => {
    const forms = getState().forms;
    return forms[formName];
  };
}

function setFields(formName, formInputs, useStoreFieldsFirst) {
  return (dispatch, getState) => {
    return formInputs.forEach((item, i) => {
        if (item.type === 'container') {
          setFields(formName, item.formInputs, dispatch);
        }

        let itemValue = item.value || null;

        if (useStoreFieldsFirst) {
          const form = getState().forms[formName];
          const filedValue = form && form[item.name]
          itemValue = filedValue || itemValue
        }

        if (item.name) {
          dispatch(Actions.updateField({
            formName: formName,
            name: item.name,
            value: itemValue,
          }));
        }
      });
  }
}

function removeFields(formName, formInputs, dispatch) {
  if (!formInputs || !formInputs.length) {
    return;
  }
  return formInputs.forEach((item, i) => {
      if (item.type === 'container') {
        return removeFields(formName, item.formInputs, dispatch);
      }

      if (item.name) {
        dispatch(Actions.removeField({
          formName: formName,
          name: item.name,
        }));
      }
    });
}

export function setDefaultFormFields(formName, formInputs) {
  return (dispatch, getState) => {
    dispatch(setFields(formName, formInputs, true))
  }
}

export function removeDefaultFormFields(formName, formInputs) {
  return (dispatch, getState) => {
    removeFields(formName, formInputs, dispatch)
  }
}


export function resetForm(formName, formInputs) {
  return (dispatch, getState) => {
    dispatch(Actions.clearErrors(formName));
    dispatch(setFields(formName, formInputs));
  }
}

export function resetField(formName, item) {
  return (dispatch, getState) => {
     dispatch(Actions.resetField({
          formName: formName,
          name: item.name,
          value: item.value || null,
      }));
  }
}