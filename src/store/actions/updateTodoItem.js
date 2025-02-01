import { updateTodoList } from '../../api';
import { UPDATE_TODO_ITEM } from './actionTypes';

export const updateTodoItem = (data) => (dispatch) =>
	updateTodoList(data)
		.then((updatedItem) => {
			dispatch({ type: UPDATE_TODO_ITEM, payload: updatedItem });
		})
		.catch((error) => {
			console.error('Ошибка при изменении задачи:', error);
		});
