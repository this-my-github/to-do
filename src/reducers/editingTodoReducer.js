export const initialEditingTodoState = {
	id: null,
	title: '',
};

export const editingTodoReducer = (state = initialEditingTodoState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESET_EDITING_TODO_ID': {
			return {
				...state,
				id: initialEditingTodoState.id,
			};
		}

		case 'SET_EDITING_TODO': {
			return {
				...payload,
			};
		}

		default:
			return state;
	}
};
