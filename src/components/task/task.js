import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button';
import { selectEditingTodoId, selectEditingTodoTitle } from '../../selectors';
import { deleteTodoAsync, updateTodoAsync, SET_EDITING_TODO } from '../../actions';
import styles from './task.module.css';

export const Task = ({ id, title, completed }) => {
	const editingTodoId = useSelector(selectEditingTodoId);
	const editingTodoTitle = useSelector(selectEditingTodoTitle);
	const dispatch = useDispatch();

	const isEditing = id === editingTodoId;

	const onTitleChange = ({ target }) => {
		dispatch(SET_EDITING_TODO(id, target.value));
	};

	const onCompletedChange = ({ target: { checked } }) => {
		dispatch(updateTodoAsync({ id, completed: checked }));
	};

	const onUpdate = (event) => {
		event.preventDefault();
		if (isEditing) {
			dispatch(updateTodoAsync({ id, title: editingTodoTitle })).then(() => {
				dispatch(SET_EDITING_TODO(null));
			});
		} else {
			dispatch(SET_EDITING_TODO(id, title));
		}
	};

	const onRemove = () => {
		dispatch(deleteTodoAsync(id));
	};

	const isUpdateBtnActive = isEditing ? styles.updateBtnActive : styles.updateBtn;

	return (
		<div className={styles.task}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={onCompletedChange}
			/>
			<form>
				<input
					className={
						completed ? styles.descriptionCompletedTask : styles.description
					}
					value={isEditing ? editingTodoTitle : title}
					onChange={onTitleChange}
					disabled={!isEditing}
				/>
				<Button style={isUpdateBtnActive} onClick={onUpdate} type="submit">
					✎
				</Button>
			</form>
			<Button onClick={onRemove}>✕</Button>
		</div>
	);
};
