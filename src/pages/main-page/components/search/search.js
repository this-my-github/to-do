import { useRef } from 'react';
import { debounce } from '../../../../utils';
import searchIcon from '../../../../assets/image/search.png';
import styles from './search.module.css';

export const Search = ({ value, setValue, setNewTodo }) => {
	const debouncedOnSearch = useRef(debounce(setNewTodo, 1500)).current;

	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	return (
		<>
			<img src={searchIcon} alt="search" className={styles.searchIcon} />
			<input
				className={styles.search}
				placeholder="New todo"
				value={value}
				onChange={onChange}
			/>
		</>
	);
};
