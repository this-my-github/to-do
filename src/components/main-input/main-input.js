import { useDispatch, useSelector } from 'react-redux';
import { Search, Sorting } from './components';
import { Button } from '../button/button';
import { getTodoAsync } from '../../actions';
import { selectNewTodo } from '../../selectors';
import styles from './main-input.module.css';

export const MainInput = () => {
	const dispatch = useDispatch();
	const newTodo = useSelector(selectNewTodo);

	const onTodoAddOnForm = (event) => {
		event.preventDefault();
		if (newTodo) {
			dispatch(getTodoAsync(newTodo));
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
