import styles from './update-todo.module.css';

export const UpdateTodo = ({ id, isCompleted, isEditing, setIsEditing, isUpdating }) => {
	return (
		<button
			type="submit"
			className={isEditing ? styles.updateBtnActive : styles.updateBtn}
			id={id}
			completed={isCompleted}
			disabled={isUpdating}
			onClick={(event) => {
				event.preventDefault();
				setIsEditing(!isEditing);
			}}
		>
			✎
		</button>
	);
};
