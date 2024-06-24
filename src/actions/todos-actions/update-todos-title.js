import { updateTodo } from '../../api';
import { UPDATE_TODOS } from './update-todos';

export const updateTodosTitle = (id, title) => (dispatch) =>
	updateTodo({ id, title }).then(() => {
		dispatch(UPDATE_TODOS({ id, title }));
	});
