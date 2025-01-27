import { SET_TODO_LIST } from '../reducers/todoListReducer';

export const searchTodoItem = (value) => ({ type: SET_TODO_LIST, payload: value });
