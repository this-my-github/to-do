import { Search, Sorting } from './components';
import { Button } from '../button/button';
import { useStateManager } from '../../state-manager';
import { createTodo } from '../../api';
import styles from './main-input.module.css';

export const MainInput = () => {
	const {
		state: {
			options: { newTodo },
		},
		updateState,
	} = useStateManager();

	const onTodoAdd = (title) => {
		createTodo({ title, completed: false }).then((todo) =>
			updateState({
				options: {
					searchInput: '',
					newTodo: '',
				},
				todos: [{ title }],
			}),
		);
	};

	const onTodoAddOnForm = (event) => {
		event.preventDefault();
		if (newTodo) {
			onTodoAdd(newTodo);
		}
	};

	return (
		<div className={styles.seachContainer}>
			<form>
				<Search />
				<Button type="submit" onClick={onTodoAddOnForm}>
					✓
				</Button>
			</form>

			<Sorting />
		</div>
	);
};
