import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../../../../utils';
import { SET_ALL_OPTIONS } from '../../../../actions';
import { selectIsSorting, selectSearchInput } from '../../../../selectors';
import { SET_INPUT } from '../../../../actions/options-actions/set-input';
import searchIcon from '../../../../assets/image/search.png';
import styles from './search.module.css';

export const Search = () => {
	const optionsSearchInput = useSelector(selectSearchInput);
	const optionsIsSorting = useSelector(selectIsSorting);
	const dispatch = useDispatch();

	const runSearch = (phrase, sorting) => {
		dispatch(SET_ALL_OPTIONS({ newTodo: phrase, isSorting: sorting }));
	};

	const debouncedRunSearch = useRef(debounce(runSearch, 1500)).current;

	const onChange = ({ target }) => {
		dispatch(SET_INPUT(target.value));
		debouncedRunSearch(target.value, optionsIsSorting);
	};

	return (
		<>
			<img src={searchIcon} alt="search" className={styles.searchIcon} />
			<input
				className={styles.search}
				placeholder="New todo"
				value={optionsSearchInput}
				onChange={onChange}
			/>
		</>
	);
};
