import styles from './delete-todo.module.css';
import { useRequestDeleteTodos } from '../../../hooks';

export const DeleteTodo = ({ id, refreshProducts, setRefreshProducts }) => {
	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodos({
		id,
		refreshProducts,
		setRefreshProducts,
	});

	return (
		<button
			className={styles.deleteBtn}
			disabled={isDeleting}
			onClick={() => {
				requestDeleteTodo();
			}}
		>
			╳
		</button>
	);
};
