import { useRef } from 'react';
import { debounce } from '../../../../utils';
import { useStateManager } from '../../../../state-manager';
import searchIcon from '../../../../assets/image/search.png';
import styles from './search.module.css';

export const Search = () => {
	const {
		state: {
			options: { searchInput, isSorting },
		},
		updateState,
	} = useStateManager();

	const runSearch = (phrase, sorting) => {
		updateState({
			options: {
				searchInput: phrase,
				newTodo: phrase,
				isSorting: sorting,
			},
		});
	};

	const debouncedRunSearch = useRef(debounce(runSearch, 1500)).current;

	const onChange = ({ target }) => {
		updateState({
			options: {
				searchInput: target.value,
			},
		});
		debouncedRunSearch(target.value, isSorting);
	};

	return (
		<>
			<img src={searchIcon} alt="search" className={styles.searchIcon} />
			<input
				className={styles.search}
				placeholder="New todo"
				value={searchInput}
				onChange={onChange}
			/>
		</>
	);
};
