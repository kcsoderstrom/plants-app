# TLDR

## actions/ActionCreators.js

Actions are annoying to create. normally thay look like this:

```
export const ACTION_TO_PERFORM = 'actionToPerform';
export const actionName = (data) {
   return {
     type: ACTION_TO_PERFORM,
     data,
   };
}

//then dispatch the action
dispatch(actionName(data))


```
or sometimes

```
    dispatch({
     type: ACTION_TO_PERFORM,
     data,
   })
```

To clean this up put action types in 

```
constants/ActionTypes.js
```
by adding a new line in the form:

```
export const ACTION_TO_PERFORM = 'actionToPerform';
```

then to dispatch an action:
```
import * as Actions from './actions/ActionCreators'

dispatch(Actions.actionToPerform())
```


read associated docs in files:
```
actions/ActionCreators.js
actions/ActionTypes.js
constants/ActionPartials.js
```

## Quick reducers 

Reducers can be a pain to make and often just need to manage some records.
The purpose is to quickly make a reducer with default create, update and delete actions to manage
records like, for example, a list of todo. 

Create a quick reucer by adding a line
```
export const REDUCER_NAME = 'reducerName';
```
to constants/Reducers.js.

This will give you a key in state with 'reducerName' and action creators,
```
reducerNameCreateOrUpdate()
reducerNameDelete()
```

That can be used in the following way in components:
```
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    reducerNameCreateOrUpdate, 
    reducerNameDelete 
} from './actions/ActionCreators'


const newComponent = props => {
    // create or update record in component
    props.reducerNameCreateOrUpdate()

    // delete record in component
    props.reducerNameDelete()
    return (
        <div></div>
    )

    const mapStateToProps = (state) => {
        return {
            reducerNameState: state.reducerName
        };
    };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    reducerNameCreateOrUpdate: ActionCreators.reducerNameCreateOrUpdate,
    reducerNameDelete: ActionCreators.reducerNameDelete
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(newComponent);
}

```

or can be used in the following way in an action file:

```
import { 
    reducerNameCreateOrUpdate, 
    reducerNameDelete 
} from './actions/ActionCreators'


export const someAction() {
    return (dispatch, getState) {
        // create or update record in component
        dispatch(reducerNameCreateOrUpdate())

        // delete record in component
        dispatch(reducerNameDelete())
    }
}

```

quick reducers can be mixed in with a normal reducer. see `reducers/index.js`

read associated docs in files:
```
actions/ActionCreators.js
constants/Reducers.js
constants/ActionPartials.js
reducers/defaultCrud.js
reducers/index.js
```



