import { List } from '../list/list';
import { MainInput } from '../main-input/main-input';
import styles from './main-page.module.css';

export const MainPage = ({
	newTodo,
	setNewTodo,
	isSorting,
	setIsSorting,
	todos,
	setTodos,
	onTodoAdd,
	onCompletedChange,
}) => (
	<>
		<h1 className={styles.header}>To-do</h1>
		<MainInput
			newTodo={newTodo}
			setNewTodo={setNewTodo}
			isSorting={isSorting}
			setIsSorting={setIsSorting}
			setTodos={setTodos}
			onTodoAdd={onTodoAdd}
		/>
		<List
			newTodo={newTodo}
			isSorting={isSorting}
			todos={todos}
			setTodos={setTodos}
			onCompletedChange={onCompletedChange}
		/>
	</>
);
