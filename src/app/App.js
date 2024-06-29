import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
import { MainInput, Task } from '../components';
import { selectTodos, selectOptions } from '../selectors';
import { SET_ERROR, readTodosAsync } from '../actions';
import styles from './app.module.css';

export const App = () => {
	const todos = useSelector(selectTodos);
	const { newTodo, isSorting, isLoading, isError } = useSelector(selectOptions);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(SET_ERROR(false));
		dispatch(readTodosAsync(newTodo, isSorting));
	}, [newTodo, isSorting]);

	return (
		<div className={styles.app}>
			<h1>To-do</h1>
			<MainInput />
			{isLoading ? (
				<HashLoader className={styles.loader} color="#646464" />
			) : isError ? (
				<h2 className={styles.error}>{isError}</h2>
			) : (
				todos.map(({ id, title, completed }) => (
					<Task key={id} id={id} title={title} completed={completed} />
				))
			)}
		</div>
	);
};
