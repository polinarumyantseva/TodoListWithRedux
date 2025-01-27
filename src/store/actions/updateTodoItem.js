import { updateTodoList } from '../../api';
import { UPDATE_TODO_ITEM } from '../reducers/todoListReducer';

export const updateTodoItem = (data) => (dispatch) =>
	updateTodoList(data).then((updatedItem) => {
		dispatch({ type: UPDATE_TODO_ITEM, payload: updatedItem });
	});
