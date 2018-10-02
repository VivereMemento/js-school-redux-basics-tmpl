import { createStore, combineReducers } from 'redux';

import user from './action-types';
const reducer = combineReducers({
	user
});

const store = createStore(
	reducer,
	undefined,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;