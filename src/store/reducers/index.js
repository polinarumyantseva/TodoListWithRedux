import { combineReducers } from 'redux';
import { todoListReducer } from './todoListReducer';
import { controlPanelReducer } from './controlPanelReducer';

export const AppReducer = combineReducers({
	todoList: todoListReducer,
	controlPanel: controlPanelReducer,
});
