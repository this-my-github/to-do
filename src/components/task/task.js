import { useState } from 'react';
import styles from './task.module.css';
import { DeleteTodo } from '../buttons/delete-todo';
import { UpdateTodo } from '../buttons/update-todo';
import { useRequestUpdateTodos } from '../../hooks';

export const Task = ({
	id,
	title,
	completed,
	refreshProducts,
	setRefreshProducts,
	setTodos,
	setSortedTodos,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [isCompleted, setIsCompleted] = useState(completed);
	const [updatedTodo, setUpdatedTodo] = useState(title);

	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodos({
		id,
		updatedTodo,
		isCompleted,
		refreshProducts,
		setRefreshProducts,
	});

	return (
		<div className={styles.task}>
			<input
				className={styles.checkbox}
				checked={isCompleted}
				onChange={() => {
					setIsCompleted(!isCompleted);
				}}
				onBlur={() => {
					requestUpdateTodo();
				}}
				type="checkbox"
			/>
			<form>
				<input
					className={
						isCompleted ? styles.descriptionCompletedTask : styles.description
					}
					key={id}
					value={updatedTodo}
					onChange={({ target }) => setUpdatedTodo(target.value)}
					onBlur={() => {
						setIsEditing(false);
						requestUpdateTodo();
					}}
					disabled={!isEditing}
				/>
				<UpdateTodo
					id={id}
					isCompleted={isCompleted}
					isUpdating={isUpdating}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
				/>
			</form>

			<DeleteTodo
				id={id}
				refreshProducts={refreshProducts}
				setRefreshProducts={setRefreshProducts}
				setTodos={setTodos}
				setSortedTodos={setSortedTodos}
			/>
		</div>
	);
};
