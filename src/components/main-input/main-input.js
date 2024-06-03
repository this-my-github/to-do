import { useState } from 'react';
import { Search, Sorting } from './components';
import { Button } from '../button/button';
import styles from './main-input.module.css';

export const MainInput = ({
	newTodo,
	setNewTodo,
	isSorting,
	setIsSorting,
	onTodoAdd,
}) => {
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
		<div className={styles.seachContainer}>
			<form>
				<Search value={value} setValue={setValue} setNewTodo={setNewTodo} />
				<Button type="submit" onClick={onTodoAddOnForm}>
					✓
				</Button>
			</form>

			<Sorting isSorting={isSorting} setIsSorting={setIsSorting} />
		</div>
	);
};
