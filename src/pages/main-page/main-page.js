import { useState } from 'react';
import { Button, List, MainInput } from '../../components';
import { Search, Sorting } from './components';
import styles from './main-page.module.css';
import { createTodo, updateTodo } from '../../api';
import { setTodoInTodos } from '../../utils';

export const MainPage = () => {
	const [newTodo, setNewTodo] = useState('');
	const [isSorting, setIsSorting] = useState(false);
	const [todos, setTodos] = useState([]);

	const onTodoAdd = (title) => {
		createTodo({ title, completed: false }).then((todo) =>
			setTodos([todo, ...todos]),
		);
	};

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	const [value, setValue] = useState('');

	const onTodoAddOnForm = (event) => {
		event.preventDefault();
		if (newTodo) {
			setNewTodo('');
			setValue('');
			onTodoAdd(newTodo);
		}
	};

	return (
		<>
			<h1 className={styles.header}>To-do</h1>

			<MainInput>
				<form>
					<Search value={value} setValue={setValue} setNewTodo={setNewTodo} />
					<Button type="submit" onClick={onTodoAddOnForm}>
						✓
					</Button>
				</form>
				<Sorting isSorting={isSorting} setIsSorting={setIsSorting} />
			</MainInput>
			{/* <MainInput
			newTodo={newTodo}
			setNewTodo={setNewTodo}
			isSorting={isSorting}
			setIsSorting={setIsSorting}
			setTodos={setTodos}
			onTodoAdd={onTodoAdd}
		/> */}
			<List
				newTodo={newTodo}
				isSorting={isSorting}
				todos={todos}
				setTodos={setTodos}
				onCompletedChange={onTodoCompletedChange}
			/>
		</>
	);
};
