import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { readTodos } from '../../api';
import styles from './list.module.css';

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
					<div key={id} className={styles.task}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={completed}
							onChange={({ target }) =>
								onCompletedChange(id, target.checked)
							}
						/>
						<Link
							to={`task/${id}`}
							className={
								completed
									? styles.descriptionCompletedTask
									: styles.description
							}
						>
							{title}
						</Link>
					</div>
				))
			)}
		</div>
	);
};
