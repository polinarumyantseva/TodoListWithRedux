import { deleteTodoList } from '../../api';
import { DELETE_TODO_ITEM } from '../reducers/todoListReducer';

export const deleteTodoItem = (data) => (dispath) =>
	deleteTodoList(data).then(() => {
		dispath({ type: DELETE_TODO_ITEM, payload: data });
	});
