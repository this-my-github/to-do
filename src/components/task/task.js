import { useState } from 'react';
import { Button } from '../button/button';
import styles from './task.module.css';

export const Task = ({
	title,
	completed,
	onRemove,
	onTitleChange,
	onCompletedChange,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [updatedTodo, setUpdatedTodo] = useState(title);

	const onUpdate = (event) => {
		event.preventDefault();
		setIsEditing(!isEditing);
		if (isEditing === true) {
			onTitleChange(updatedTodo);
		}
	};

	const isUpdateBtnActive = isEditing ? styles.updateBtnActive : styles.updateBtn;

	return (
		<div className={styles.task}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>
			<form>
				<input
					className={
						completed ? styles.descriptionCompletedTask : styles.description
					}
					value={updatedTodo}
					onChange={({ target }) => setUpdatedTodo(target.value)}
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
