import styles from './sort-todo.module.css';
import sortIcon from '../../../assets/image/sort.png';

export const SortTodo = ({ isSorting, setIsSorting, setTodos, setSortedTodos }) => {
	return (
		<button
			className={styles.sortBtn}
			onClick={() => {
				isSorting ? setTodos([]) : setSortedTodos([]);
				setIsSorting(!isSorting);
			}}
		>
			<img
				src={sortIcon}
				alt="sortIcon"
				className={isSorting ? styles.sortIconActive : styles.sortIcon}
			/>
		</button>
	);
};
// 🠑
