import { getTodoList } from '../../api';
import { SET_TODO_LIST } from './actionTypes';

export const setTodoList = () => (dispatch) =>
	getTodoList()
		.then((todos) => {
			dispatch({ type: SET_TODO_LIST, payload: todos });
		})
		.catch((error) => {
			console.error('Ошибка при загрузке задач:', error);
		});
