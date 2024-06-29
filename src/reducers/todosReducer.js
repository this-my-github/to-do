import { setTodoInTodos } from '../utils';

export const initialTodosState = [];

export const todosReducer = (state = initialTodosState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_TODOS': {
			return payload;
		}

		case 'UPDATE_TODO': {
			const newTodos = setTodoInTodos(state, payload);

			return [...newTodos];
		}

		case 'DELETE_TODO': {
			return state.filter(({ id }) => id !== payload);
		}

		default:
			return state;
	}
};
