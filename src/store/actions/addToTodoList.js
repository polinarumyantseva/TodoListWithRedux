import { addTodoList } from '../../api';
import { ADD_TO_TODO_LIST } from './actionTypes';

export const addToTodoList = (data) => (dispath) =>
	addTodoList(data)
		.then((newItem) => {
			dispath({ type: ADD_TO_TODO_LIST, payload: newItem });
		})
		.catch((error) => {
			console.error('Ошибка при добавлении задачи:', error);
		});
