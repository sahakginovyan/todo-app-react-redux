import { createStore } from 'redux';
import { loadState, saveState } from './local-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';

// Load our persited state
const persistedState = loadState();

// Create our store
export const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools()
);

// Subscribe to store changes and persist state to local storage
store.subscribe( throttle( () => {
	saveState(store.getState());
}, 1000));