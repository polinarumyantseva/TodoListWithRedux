import { SET_INPUT_VALUE, RESET_INPUT_VALUE } from '../actions/actionTypes';

const initialState = {
	todoItemInputValue: '',
};

export const controlPanelReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_INPUT_VALUE:
			return { ...state, todoItemInputValue: payload };

		case RESET_INPUT_VALUE:
			return { ...state, todoItemInputValue: initialState.todoItemInputValue };

		default:
			return state;
	}
};
