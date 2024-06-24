import { createTodo } from '../../api';
import { RESET_INPUT } from '../options-actions/reset-input';

export const getTodoAsync = (title) => (dispatch) =>
	createTodo({ title, completed: false }).then(() => {
		dispatch(RESET_INPUT);
	});
