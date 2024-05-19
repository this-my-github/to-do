import { AddTodo } from '../buttons/add-todo/add-todo';
import styles from './main-input.module.css';
import searchIcon from '../../assets/image/search.png';
import { SortTodo } from '../buttons/sort-todo';

export const MainInput = ({
	newTodo,
	setNewTodo,
	refreshProducts,
	setRefreshProducts,
	isSorting,
	setIsSorting,
	setTodos,
	setSortedTodos,
}) => {
	return (
		<div className={styles.seachContainer}>
			<img src={searchIcon} alt="search" className={styles.searchIcon} />
			<form>
				<input
					className={styles.search}
					placeholder="New todo"
					value={newTodo}
					onChange={({ target }) => {
						setTodos([]);
						setSortedTodos([]);
						setNewTodo(target.value);
					}}
				/>
				<AddTodo
					newTodo={newTodo}
					refreshProducts={refreshProducts}
					setNewTodo={setNewTodo}
					setRefreshProducts={setRefreshProducts}
					setTodos={setTodos}
					setSortedTodos={setSortedTodos}
				/>
			</form>

			<SortTodo
				isSorting={isSorting}
				setIsSorting={setIsSorting}
				setTodos={setTodos}
				setSortedTodos={setSortedTodos}
			/>
		</div>
	);
};
