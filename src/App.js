import { useEffect, useState } from 'react';
import { MainInput, Task } from './components';
import { createTodo, deleteTodo, readTodos, updateTodo } from './api';
import { setTodoInTodos } from './utils';
import { HashLoader } from 'react-spinners';
import styles from './app.module.css';
import { MainInputContextProvider } from './main-input-context-provider';

export const App = () => {
	const [newTodo, setNewTodo] = useState('');
	const [isSorting, setIsSorting] = useState(false);
	const [todos, setTodos] = useState([]);

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const onTodoAdd = (title) => {
		createTodo({ title, completed: false }).then((todo) =>
			setTodos([todo, ...todos]),
		);
	};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
	};

	const onTodoTitleChange = (id, newTitle) => {
		updateTodo({ id, title: newTitle }).then(() => {
			setTodos(setTodoInTodos(todos, { id, title: newTitle }));
		});
	};

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	useEffect(() => {
		setIsError(false);
		readTodos(newTodo, isSorting)
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.catch((err) => setIsError(err.message))
			.finally(() => {
				setIsLoading(false);
			});
	}, [newTodo, isSorting]);

	return (
		<div className={styles.app}>
			<h1>To-do</h1>
			<MainInputContextProvider
				sortingValue={{ isSorting, setIsSorting }}
				newTodoValue={{ newTodo, setNewTodo }}
			>
				<MainInput onTodoAdd={onTodoAdd} />
			</MainInputContextProvider>
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
						onRemove={() => onTodoRemove(id)}
						onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
						onCompletedChange={(newCompleted) =>
							onTodoCompletedChange(id, newCompleted)
						}
					/>
				))
			)}
		</div>
	);
};
