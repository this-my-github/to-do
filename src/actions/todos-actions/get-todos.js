import { readTodos } from '../../api';
import { SET_ERROR } from '../options-actions/set-error';
import { SET_LOADING } from '../options-actions/set-loading';
import { SET_TODOS } from './set-todos';

export const getTodos = (newTodo, isSorting) => (dispatch) =>
	readTodos(newTodo, isSorting)
		.then((loadedTodos) => {
			dispatch(SET_TODOS(loadedTodos));
		})
		.catch((err) => dispatch(SET_ERROR(err.message)))
		.finally(() => {
			dispatch(SET_LOADING(false));
		});
