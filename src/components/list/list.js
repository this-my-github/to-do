import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { readTodos } from '../../api';
import styles from './list.module.css';
import { Task } from './components/task/task';

export const List = ({ newTodo, isSorting, todos, setTodos, onCompletedChange }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsError(false);
		readTodos(newTodo, isSorting)
			.then((loadedTodos) => {
				console.log(loadedTodos);
				setTodos(loadedTodos);
			})
			.catch((err) => setIsError(err.message))
			.finally(() => {
				setIsLoading(false);
			});
	}, [newTodo, isSorting]);

	return (
		<div>
			{isLoading ? (
				<HashLoader className={styles.loader} color="#646464" />
			) : isError ? (
				<h2 className={styles.error}>{isError}</h2>
			) : (
				todos.map(({ id, title, completed }) => (
					<Task
						key={id}
						id={id}
						title={title}
						completed={completed}
						onCompletedChange={onCompletedChange}
					/>
				))
			)}
		</div>
	);
};
