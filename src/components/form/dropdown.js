import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './dropdown.css'

/**
 * A generic drop down list that handles:
 *
 * can pass in a list in list key of any type and they will be mapped to li's
 *
 *  - its open and close state
 *
 *  - close on click out of component
 *
 *  - a list of components passed in as children or through 'list' prop type.
 *
 *  - when list is displayed and too close to the bottom of the
 *    viewport the list will reverse direction.
 */
class DropDown extends Component {
  static propTypes = {

    // the max height of the ul
    dropDownHeight: PropTypes.number,

    // class for the whole component
    className: PropTypes.string,

    // class for li's
    listItemClass: PropTypes.string,

    // the selected item
    value: PropTypes.node,

    // class for the selected item container
    listItemSelectedClass: PropTypes.string,

    // class for the ul container
    listContainerClass: PropTypes.string,

    // class for the ul
    listClass: PropTypes.string,

    // defaultDirection can be 'up' or 'down'
    defaultDirection: PropTypes.string,
    list: PropTypes.array,
    onChange: PropTypes.func,
    onClickToggleOpen: PropTypes.func,

    // show or hide the drop down
    show: PropTypes.bool,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    children: PropTypes.any,
  };

  static state = {
    currentLiIndex: -1,
    isOpen: false,
    focused: false,
  }

  componentWillMount() {
    this.state = DropDown.state;

    const { show } = this.props;
    if (typeof show === 'undefined') {
      this.setState({ isOpen: false });
    }

    document.addEventListener('click', this.closeOnClickOutOfList.bind(this), false);
  }

  componentDidUpdate() {
    this.scrollLiIntoView();
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
    let { show } = this.props;

    show = typeof show === 'undefined' ? isOpen : show;
    const targetElement = this.getDomNode();
    let isInside = false;

    if (targetElement) {
      isInside = targetElement.contains(event.target) || targetElement === event.target;
    }

    if (!isInside && show) {
      this.toggleOpenDropDownList();
    }
  }

  /*
   * Handles a click of a list item
   */
  handleItemClick(item, i) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(item);
    }

    this.setState({currentLiIndex: i});
    this.toggleOpenDropDownList();
  }

  /*
   * Toggles the drop down list open and closed.
   */
  toggleOpenDropDownList() {
    const { onClickToggleOpen } = this.props;

    if (onClickToggleOpen) {
      onClickToggleOpen();
    } else {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  incrementLiIndex(amt) {
    const { currentLiIndex} = this.state;
    const { list } = this.props;
    const listLength = list.length - 1;
    const increment = (num) => {
      let nextIdx = currentLiIndex + num;
      nextIdx = nextIdx < 0 ? 0 : nextIdx;
      nextIdx = nextIdx > listLength ? listLength : nextIdx;
      this.setState({currentLiIndex: nextIdx});
    }
    return {
      increment: (amt) => increment(amt || 1),
      decrement: (amt) => increment(amt || -1),
    }
  }

  onKeyDown(e) {
    let { currentLiIndex, isOpen, focused } = this.state;
    const { list } = this.props;

    const incrementer = this.incrementLiIndex();
    const keys = {
      ArrowDown: incrementer.increment,
      ArrowUp: incrementer.decrement,
      Enter: () => this.handleItemClick(list[currentLiIndex], currentLiIndex),
    }

    const keysFunc = keys[e.key];

    if (!keysFunc || !focused) {
      return;
    }

    e.preventDefault();
    keysFunc();
  }

  scrollLiIntoView() {
    const { listContainer, selected } = this.refs;
    if (!selected || !listContainer) {
      return;
    }

    const selectedHeight = selected.offsetHeight;
    const listPos = listContainer.getBoundingClientRect();
    const selectedPos = selected.getBoundingClientRect();
    const isSelectedTopBelowContainerBottom = listPos.bottom < selectedPos.top;
    const isSelectedBottomAboveContainerTop = listPos.top > selectedPos.bottom - selectedHeight;

    if (isSelectedTopBelowContainerBottom) {
      listContainer.scrollTop = listContainer.scrollTop + selectedHeight;
    }

    if (isSelectedBottomAboveContainerTop) {
      listContainer.scrollTop = listContainer.scrollTop - selectedHeight;
    }
  }

  render() {
    // TODO: dropDownHeight should accept px or rem. add container to ul so no
    // TODO: refactor to only take in parent class.
    // need for height
    const {
      className,
      listItemClass,
      value,
      listItemSelectedClass,
      listContainerClass,
      listClass,
      list,
      dropDownHeight,
      error,
      placeholder,
      disabled,
      errorMessage,
    } = this.props;

    let { show } = this.props;

    const { isOpen, currentLiIndex, focused } = this.state;

    let doesShowVarExist = typeof show !== 'undefined';
    show = doesShowVarExist ? show : isOpen;

    const openCloseStateClass = show ? 'showing' : '';
    let listItems;

    //TODO when value is given, select its index in the list

    if (list) {
      listItems = list.map((item, i) => {
        const props = {};
        const selected = currentLiIndex === i;
        const selectedClass = selected ? 'selected' : '';
        if (selected) {
          props.ref = "selected";
        }

        return (
          <li
            key={item + `${i}`}
            className={`drop-down-list-item ${listItemClass || ''} ${selectedClass}`}
            onClick={() => this.handleItemClick(item, i)}
            {...props}
          >{item}</li>
        );
      });
    }

    return (
      <div
        className={`component-drop-down ${className || ''} ${openCloseStateClass} ${error ? 'has-error' : ''}`}
        ref="container"
        tabIndex="0"
        onFocus={() => !disabled && this.setState({focused: true, isOpen: true})}
        onBlur={() => this.setState({focused: false, isOpen: false})}
        onKeyDown={(e) => this.onKeyDown(e)}
      >

        <div
          className={`drop-down-selected ${listItemSelectedClass || ''}`}
          onMouseDown={() => focused && this.toggleOpenDropDownList()}
        >{value || placeholder}
        </div>

        <div
          className={`drop-down-list-container direction-down ${listContainerClass || ''}`}
        >
            <ul
                className={`drop-down-list ${listClass || ''}`}
                ref="listContainer"
                style={(dropDownHeight ? { maxHeight: `${dropDownHeight}px` } : {})}
            >

            {listItems || this.props.children || []}
            </ul>
        </div>
        <div className="error-message">{isOpen ? '' : errorMessage}</div>
      </div>
    );
  }
}


export default DropDown;
