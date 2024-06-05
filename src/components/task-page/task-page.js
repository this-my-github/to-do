import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import styles from './task-page.module.css';
import { readTodo } from '../../api';
import { useNavigate, useParams } from 'react-router-dom';
import { LOADING_TIMEOUT } from '../../constants/loading-time';

export const TaskPage = ({ onRemove, onTitleChange, onCompletedChange }) => {
	const [todo, setTodo] = useState(null);

	const [isEditing, setIsEditing] = useState(false);
	const [updatedTodo, setUpdatedTodo] = useState(todo?.title);
	const [completed, setCompleted] = useState(todo?.completed);

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let isLoadingTimeout = false;
		let isProductLoaded = false;

		setTimeout(() => {
			isLoadingTimeout = true;

			if (!isProductLoaded) {
				navigate('/todo-load-error');
			}
		}, LOADING_TIMEOUT);

		readTodo(params.id)
			.then((loadedTodo) => {
				if (!isLoadingTimeout) {
					setTodo(loadedTodo);
					setUpdatedTodo(loadedTodo.title);
				}
			})
			.catch((err) => navigate('/todo-not-exist'))
			.finally(() => (isProductLoaded = true));
	}, [params.id, navigate]);

	if (!todo) {
		return null;
	}

	const onUpdate = (event) => {
		event.preventDefault();
		setIsEditing(!isEditing);
		if (isEditing === true) {
			onTitleChange(params.id, updatedTodo);
		}
	};

	const isUpdateBtnActive = isEditing ? styles.updateBtnActive : styles.updateBtn;

	return (
		<>
			<Button onClick={() => navigate(-1)}>←</Button>
			<div className={styles.task}>
				<input
					className={styles.checkbox}
					type="checkbox"
					checked={completed}
					onChange={({ target }) => {
						setCompleted(!completed);
						onCompletedChange(params.id, target.checked);
					}}
				/>
				<form>
					<textarea
						className={
							completed
								? styles.descriptionCompletedTask
								: styles.description
						}
						value={updatedTodo}
						onChange={({ target }) => setUpdatedTodo(target.value)}
						disabled={!isEditing}
					/>
					<Button style={isUpdateBtnActive} onClick={onUpdate} type="submit">
						✎
					</Button>
				</form>
				<Button
					onClick={() => {
						onRemove(params.id);
						navigate(-1);
					}}
				>
					✕
				</Button>
			</div>
		</>
	);
};
