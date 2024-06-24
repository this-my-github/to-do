import { updateTodo } from '../../api';
import { UPDATE_TODOS } from './update-todos';

export const updateTodosCompleted = (id, completed) => (dispatch) =>
	updateTodo({ id, completed }).then(() => {
		dispatch(UPDATE_TODOS({ id, completed }));
	});
