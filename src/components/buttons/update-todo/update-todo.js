import styles from './update-todo.module.css';

export const UpdateTodo = ({ isCompleted, isEditing, setIsEditing, isUpdating }) => {
	return (
		<button
			type="submit"
			className={isEditing ? styles.updateBtnActive : styles.updateBtn}
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
