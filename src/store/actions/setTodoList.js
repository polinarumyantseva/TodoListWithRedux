import { getTodoList } from '../../api';
import { SET_TODO_LIST } from '../reducers/todoListReducer';

export const setTodoList = () => (dispatch) =>
	getTodoList().then((todos) => {
		dispatch({ type: SET_TODO_LIST, payload: todos });
	});
