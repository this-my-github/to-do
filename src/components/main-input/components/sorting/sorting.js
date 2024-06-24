import { Button } from '../../../button/button';
import sortIcon from '../../../../assets/image/sort.png';
import styles from './sorting.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SORTING } from '../../../../actions';
import { selectIsSorting } from '../../../../selectors';

export const Sorting = () => {
	const optionsIsSorting = useSelector(selectIsSorting);
	const dispatch = useDispatch();

	const onSorting = () => {
		dispatch(SET_SORTING(!optionsIsSorting));
	};

	return (
		<Button onClick={onSorting}>
			<img
				src={sortIcon}
				alt="sortIcon"
				className={optionsIsSorting ? styles.sortIconActive : styles.sortIcon}
			/>
		</Button>
	);
};
// 🠑
