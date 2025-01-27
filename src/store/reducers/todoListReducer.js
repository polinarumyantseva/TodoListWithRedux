export const initialState = [];

export const SET_TODO_LIST = 'SET_TODO_LIST';
export const ADD_TO_TODO_LIST = 'ADD_TO_TODO_LIST';
export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';

export const todoListReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_TODO_LIST:
			return payload;

		case ADD_TO_TODO_LIST:
			return [...state, payload];

		case UPDATE_TODO_ITEM:
			return state.map((item) => (item.id === payload.id ? payload : item));

		case DELETE_TODO_ITEM:
			return state.filter((item) => item.id !== payload.id);

		default:
			return state;
	}
};
