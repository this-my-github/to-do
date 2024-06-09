import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, MainInput } from '../../components';
import { deleteTodo, readTodo, updateTodo } from '../../api';
import { LOADING_TIMEOUT } from '../../constants';
import styles from './task-page.module.css';

export const TaskPage = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState('');

	const { id } = useParams();
	const navigate = useNavigate();

	const onTitleChange = ({ target }) => setTitle(target.value);

	const onRemove = () => {
		deleteTodo(id).then(() => navigate(-1));
	};

	const onTodoTitleChange = (id, newTitle) => {
		updateTodo({ id, title: newTitle }).then(() => navigate(-1));
	};

	useEffect(() => {
		let isLoadingTimeout = false;
		let isProductLoaded = false;

		setTimeout(() => {
			isLoadingTimeout = true;

			if (!isProductLoaded) {
				navigate('/todo-load-error');
			}
		}, LOADING_TIMEOUT);

		readTodo(id)
			.then((loadedTodo) => {
				if (!isLoadingTimeout) {
					setTitle(loadedTodo.title);
				}
			})
			.catch(() => navigate('/todo-not-exist'))
			.finally(() => (isProductLoaded = true));
	}, [id, navigate]);

	const onUpdate = (event) => {
		event.preventDefault();
		setIsEditing(!isEditing);
		if (isEditing === true) {
			onTodoTitleChange(id, title);
		}
	};

	const isUpdateBtnActive = isEditing ? styles.updateBtnActive : styles.updateBtn;

	return (
		<>
			<MainInput>
				<Button onClick={() => navigate(-1)}>←</Button>
				<Button style={isUpdateBtnActive} onClick={onUpdate} type="submit">
					✎
				</Button>
				<Button onClick={onRemove}>✕</Button>
			</MainInput>
			<div className={styles.task}>
				<form>
					<textarea
						className={
							styles.description
							// completed
							// 	? styles.descriptionCompletedTask
							// : styles.description
						}
						value={title}
						onChange={onTitleChange}
						disabled={!isEditing}
					/>
				</form>
			</div>
		</>
	);
};
