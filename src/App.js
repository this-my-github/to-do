import { useRequestGetTodos, useRequestSortTodos } from './hooks';
import { MainInput } from './components/main-input';
import { Task } from './components/task';
import { HashLoader } from 'react-spinners';
import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [refreshProducts, setRefreshProducts] = useState(false);
	const [newTodo, setNewTodo] = useState('');
	const [isSorting, setIsSorting] = useState(false);

	const { isLoading, todos, setTodos, isError } = useRequestGetTodos({
		refreshProducts,
		newTodo,
		isSorting,
	});

	const { sortedTodos, setSortedTodos } = useRequestSortTodos({
		refreshProducts,
		newTodo,
		isSorting,
	});
	return (
		<div className={styles.app}>
			<h1>To-do</h1>
			<MainInput
				refreshProducts={refreshProducts}
				setRefreshProducts={setRefreshProducts}
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				isSorting={isSorting}
				setIsSorting={setIsSorting}
				setTodos={setTodos}
				setSortedTodos={setSortedTodos}
			/>
			{isLoading ? (
				<HashLoader className={styles.loader} color="#646464" />
			) : isError ? (
				<h2 className={styles.error}>{isError}</h2>
			) : isSorting ? (
				sortedTodos.map(({ id, title, completed }) => (
					<Task
						id={id}
						title={title}
						completed={completed}
						refreshProducts={refreshProducts}
						setRefreshProducts={setRefreshProducts}
						setTodos={setTodos}
						setSortedTodos={setSortedTodos}
					/>
				))
			) : (
				todos.map(({ id, title, completed }) => (
					<Task
						id={id}
						title={title}
						completed={completed}
						refreshProducts={refreshProducts}
						setRefreshProducts={setRefreshProducts}
						setTodos={setTodos}
						setSortedTodos={setSortedTodos}
					/>
				))
			)}
		</div>
	);
};
