import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import shoppingReducer from './shoppingReducer';
import cartReducer from './cartReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	auth: authReducer,
	shopping: shoppingReducer,
	cart: cartReducer,
});