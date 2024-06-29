import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../../../../utils';
import { SET_NEW_TODO } from '../../../../actions';
import { selectSearchInput } from '../../../../selectors';
import { SET_INPUT } from '../../../../actions/options-actions/set-input';
import searchIcon from '../../../../assets/image/search.png';
import styles from './search.module.css';

export const Search = () => {
	const searchInput = useSelector(selectSearchInput);
	const dispatch = useDispatch();

	const runSearch = (phrase) => {
		dispatch(SET_NEW_TODO(phrase));
	};

	const debouncedRunSearch = useRef(debounce(runSearch, 1500)).current;

	const onChange = ({ target }) => {
		dispatch(SET_INPUT(target.value));
		debouncedRunSearch(target.value);
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
