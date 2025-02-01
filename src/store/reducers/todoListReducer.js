import {
	SET_TODO_LIST,
	ADD_TO_TODO_LIST,
	UPDATE_TODO_ITEM,
	DELETE_TODO_ITEM,
	SORT_TODO_LIST,
	SEARCH_TODO_ITEM,
	RESET_TODO_LIST,
} from '../actions/actionTypes';

const initialState = {
	initialTodos: [],
	todos: [],
};

export const todoListReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_TODO_LIST:
			return {
				...state,
				todos: payload,
				initialTodos: payload,
			};

		case ADD_TO_TODO_LIST:
			return {
				...state,
				todos: [...state.todos, payload],
				initialTodos: [...state.initialTodos, payload],
			};

		case UPDATE_TODO_ITEM:
			return {
				...state,
				todos: state.todos.map((item) => (item.id === payload.id ? payload : item)),
				initialTodos: state.initialTodos.map((item) => (item.id === payload.id ? payload : item)),
			};

		case DELETE_TODO_ITEM:
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== payload.id),
				initialTodos: state.initialTodos.filter((item) => item.id !== payload.id),
			};

		case SORT_TODO_LIST:
			return {
				...state,
				todos: [...state.todos].sort((a, b) => (a.title > b.title ? 1 : -1)),
			};

		case SEARCH_TODO_ITEM:
			return {
				...state,
				todos: state.todos.filter((item) => item.title.indexOf(payload) !== -1),
			};

		case RESET_TODO_LIST:
			return {
				...state,
				todos: state.initialTodos,
			};

		default:
			return state;
	}
};
