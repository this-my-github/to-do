import { useEffect, useState } from 'react';
import { MainInput, Task } from '../components';
import { readTodos } from '../api';
import { HashLoader } from 'react-spinners';
import { useStateManager } from '../state-manager';
import styles from './app.module.css';

export const App = () => {
	const { state, setState } = useStateManager();
	const {
		todos,
		options: { newTodo, isSorting },
	} = state;

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsError(false);
		readTodos(newTodo, isSorting)
			.then((loadedTodos) => {
				setState({ ...state, todos: loadedTodos });
			})
			.catch((err) => setIsError(err.message))
			.finally(() => {
				setIsLoading(false);
			});
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
