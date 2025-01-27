import { addTodoList } from '../../api';
import { ADD_TO_TODO_LIST } from '../reducers/todoListReducer';

export const addToTodoList = (data) => (dispath) =>
	addTodoList(data).then((newItem) => {
		dispath({ type: ADD_TO_TODO_LIST, payload: newItem });
	});
