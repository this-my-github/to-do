import { Button } from '../button/button';
import { deleteTodo, updateTodo } from '../../api';
import { useStateManager } from '../../state-manager';
import styles from './task.module.css';

export const Task = ({ id, title, completed }) => {
	const {
		state: {
			editingTodo: { id: editingTodoId, title: editingTodoTitle },
		},
		updateState,
	} = useStateManager();

	const isEditing = id === editingTodoId;

	const onTitleChange = ({ target }) => {
		updateState({ editingTodo: { title: target.value } });
	};

	const onCompletedChange = ({ target: { checked } }) => {
		updateTodo({ id, completed: checked }).then(() => {
			updateState({ todos: [{ id, completed: checked }] });
		});
	};

	const onUpdate = (event) => {
		event.preventDefault();
		if (isEditing) {
			updateTodo({ id, title }).then(() => {
				updateState({
					todos: [{ id, title: editingTodoTitle }],
					editingTodo: { id: null },
				});
			});
		} else {
			updateState({ editingTodo: { id, title } });
		}
	};

	const onRemove = () => {
		deleteTodo(id).then(() => updateState({ todos: [{ id }] }));
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
