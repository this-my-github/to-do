import { updateTodo } from '../../api';
import { SET_LOADING } from '../options-actions/set-loading';

export const UPDATE_TODO = (payload) => ({
	type: 'UPDATE_TODO',
	payload: payload,
});

export const updateTodoAsync = (newTodoData) => (dispatch) => {
	dispatch(SET_LOADING(true));

	return updateTodo(newTodoData)
		.then(() => {
			dispatch(UPDATE_TODO(newTodoData));
		})
		.finally(() => dispatch(SET_LOADING(false)));
};
