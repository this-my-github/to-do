import { Button } from '../../../button/button';
import { useContext } from 'react';
import { SortingContext } from '../../../../context';
import sortIcon from '../../../../assets/image/sort.png';
import styles from './sorting.module.css';

export const Sorting = () => {
	const { isSorting, setIsSorting } = useContext(SortingContext);
	const onSorting = () => setIsSorting(!isSorting);

	return (
		<Button onClick={onSorting}>
			<img
				src={sortIcon}
				alt="sortIcon"
				className={isSorting ? styles.sortIconActive : styles.sortIcon}
			/>
		</Button>
	);
};
// 🠑
