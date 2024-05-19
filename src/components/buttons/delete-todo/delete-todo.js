import styles from './delete-todo.module.css';
import { useRequestDeleteTodos } from '../../../hooks';

export const DeleteTodo = ({
	id,
	refreshProducts,
	setRefreshProducts,
	setTodos,
	setSortedTodos,
}) => {
	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodos({
		id,
		refreshProducts,
		setRefreshProducts,
	});

	return (
		<button
			className={styles.deleteBtn}
			id={id}
			disabled={isDeleting}
			onClick={() => {
				setTodos([]);
				setSortedTodos([]);
				requestDeleteTodo();
			}}
		>
			╳
		</button>
	);
};
