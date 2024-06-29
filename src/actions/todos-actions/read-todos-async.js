import { readTodos } from '../../api';
import { SET_ERROR } from '../options-actions/set-error';
import { SET_LOADING } from '../options-actions/set-loading';
import { SET_TODOS } from './set-todos';

export const readTodosAsync = (newTodo, isSorting) => (dispatch) => {
	dispatch(SET_LOADING(true));

	return readTodos(newTodo, isSorting)
		.then((loadedTodos) => {
			dispatch(SET_TODOS(loadedTodos));
		})
		.catch((err) => dispatch(SET_ERROR(err.message)))
		.finally(() => {
			dispatch(SET_LOADING(false));
		});
};
