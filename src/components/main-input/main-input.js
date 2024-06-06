import { useState, useContext } from 'react';
import { Search, Sorting } from './components';
import { Button } from '../button/button';
import styles from './main-input.module.css';
import { NewTodoContext } from '../../context';

export const MainInput = ({ onTodoAdd }) => {
	const [value, setValue] = useState('');
	const { newTodo, setNewTodo } = useContext(NewTodoContext);

	const onTodoAddOnForm = (event) => {
		event.preventDefault();
		if (newTodo) {
			setNewTodo('');
			setValue('');
			onTodoAdd(newTodo);
		}
	};

	return (
		<div className={styles.seachContainer}>
			<form>
				<Search value={value} setValue={setValue} />
				<Button type="submit" onClick={onTodoAddOnForm}>
					✓
				</Button>
			</form>

			<Sorting />
		</div>
	);
};
