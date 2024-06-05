import sortIcon from '../../../../assets/image/sort.png';
import { Button } from '../../../button/button';
import styles from './sorting.module.css';

export const Sorting = ({ isSorting, setIsSorting }) => {
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
