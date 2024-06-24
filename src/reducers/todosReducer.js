import { setTodoInTodos } from '../utils';

export const initialTodosState = {
	todos: [],
};

export const todosReducer = (state = initialTodosState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_TODOS': {
			return {
				todos: [...payload],
			};
		}

		case 'UPDATE_TODOS': {
			const newTodos = setTodoInTodos(state.todos, payload);

			return {
				todos: newTodos,
			};
		}

		case 'DELETE_TODO': {
			const filteredTodos = state.todos.filter(({ id }) => id !== payload);
			return {
				todos: filteredTodos,
			};
		}

		default:
			return state;
	}
};
