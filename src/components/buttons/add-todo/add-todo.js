import styles from './add-todo.module.css';
import { useRequestAddTodos } from '../../../hooks';

export const AddTodo = ({ newTodo, refreshProducts, setRefreshProducts, setNewTodo }) => {
	const { isCreating, requestAddTodo } = useRequestAddTodos({
		newTodo,
		refreshProducts,
		setRefreshProducts,
	});

	return (
		<button
			type="submit"
			className={styles.addBtn}
			disabled={isCreating}
			onClick={(event) => {
				event.preventDefault();
				if (newTodo) {
					setNewTodo('');
					requestAddTodo();
				}
			}}
		>
			✓
		</button>
	);
};
