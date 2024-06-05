import { useState } from 'react';
import { MainPage, TaskPage } from './components';
import { createTodo, deleteTodo, updateTodo } from './api';
import { setTodoInTodos } from './utils';
import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';

const PageNotExists = () => <div>Ошибка, страница была не найдена</div>;
const TodoNotFound = () => <div>Такой товар не существует</div>;
const TodoLoadError = () => <div>Ошибка загрузки товара, попробуйте ещё раз позднее</div>;

export const App = () => {
	const [newTodo, setNewTodo] = useState('');
	const [isSorting, setIsSorting] = useState(false);
	const [todos, setTodos] = useState([]);

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

	return (
		<div className={styles.app}>
			<Routes>
				<Route
					path="/"
					element={
						<MainPage
							newTodo={newTodo}
							setNewTodo={setNewTodo}
							isSorting={isSorting}
							setIsSorting={setIsSorting}
							todos={todos}
							setTodos={setTodos}
							onTodoAdd={onTodoAdd}
							onCompletedChange={onTodoCompletedChange}
						/>
					}
				/>
				<Route
					path="task/:id"
					element={
						<TaskPage
							onRemove={onTodoRemove}
							onTitleChange={onTodoTitleChange}
							onCompletedChange={onTodoCompletedChange}
						/>
					}
				/>
				<Route path="/todo-load-error" element={<TodoLoadError />} />
				<Route path="/todo-not-exist" element={<TodoNotFound />} />
				<Route path="*" element={<PageNotExists />} />
			</Routes>
		</div>
	);
};
