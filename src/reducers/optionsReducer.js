export const initialOptionsState = {
	searchInput: '',
	newTodo: '',
	isSorting: false,
	isLoading: true,
	isError: false,
};

export const optionsReducer = (state = initialOptionsState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESET_INPUT': {
			return {
				...state,
				searchInput: initialOptionsState.searchInput,
				newTodo: initialOptionsState.newTodo,
			};
		}

		case 'SET_ALL_OPTIONS': {
			return {
				...state,
				...payload,
			};
		}

		case 'SET_INPUT': {
			return {
				...state,
				searchInput: payload,
			};
		}

		case 'SET_SORTING': {
			return {
				...state,
				isSorting: payload,
			};
		}
		case 'SET_LOADING': {
			return {
				...state,
				isLoading: payload,
			};
		}
		case 'SET_ERROR': {
			return {
				...state,
				isError: payload,
			};
		}

		default:
			return state;
	}
};
