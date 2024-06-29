import { createTodo } from '../../api';
import { RESET_INPUT } from '../options-actions/reset-input';

export const createTodoAsync = (title) => (dispatch) =>
	createTodo({ title, completed: false }).then(() => {
		dispatch(RESET_INPUT);
	});
