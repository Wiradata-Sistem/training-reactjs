import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { UserReducer, UserAction } from './User';
import { GroupReducer, GroupAction } from './Group';

const config = { key: 'root', storage };

const rootReducer = persistCombineReducers(config, {
	UserReducer, GroupReducer,
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);
const persistor = persistStore(store);

const actions = { UserAction, GroupAction };


export { store as default, actions, persistor };