import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { router } from './routes';
import { register } from './store/storeInstance';
import configureStore from './store/configureStore';
import saveStateToStorage from './store/saveState';
import { loadSessionState, loadLocalState } from './store/localStorage'
// import { preLoadImages } from './helpers/imagePreLoad';
// import values from 'lodash/values';
// import content from './content';

import './fonts.css';

const sessionState = loadSessionState();
const localStorageState = loadLocalState();
const preLoadedState = {...sessionState, ...localStorageState}

let store = configureStore(preLoadedState);
saveStateToStorage(store);
register(store);

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
  document.getElementById('root')
);

//TODO this does not belong here. or at least the images do not.
// preLoadImages(values(content.assets));
