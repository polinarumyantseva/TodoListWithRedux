import { deleteTodoList } from '../../api';
import { DELETE_TODO_ITEM } from './actionTypes';

export const deleteTodoItem = (data) => (dispath) =>
	deleteTodoList(data)
		.then(() => {
			dispath({ type: DELETE_TODO_ITEM, payload: data });
		})
		.catch((error) => {
			console.error('Ошибка при удалении задачи:', error);
		});
