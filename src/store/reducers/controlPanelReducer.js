const initialState = {
	todoItemInputValue: '',
	isSorted: false,
};

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE';
export const SET_SORTED_VALUE = 'SET_SORTED_VALUE';

export const controlPanelReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_INPUT_VALUE:
			return { ...state, todoItemInputValue: payload };

		case SET_SORTED_VALUE:
			return { ...state, isSorted: payload };

		case RESET_INPUT_VALUE:
			return { ...state, todoItemInputValue: initialState.todoItemInputValue };

		default:
			return state;
	}
};
