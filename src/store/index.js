import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { UserReducer, UserAction } from './User';

const config = { key: 'root', storage };

const rootReducer = persistCombineReducers(config, {
	UserReducer,
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);
const persistor = persistStore(store);

const actions = { UserAction };


export { store as default, actions, persistor };