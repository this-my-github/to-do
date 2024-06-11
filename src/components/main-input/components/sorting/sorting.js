import { useStateManager } from '../../../../state-manager';
import { Button } from '../../../button/button';
import sortIcon from '../../../../assets/image/sort.png';
import styles from './sorting.module.css';

export const Sorting = () => {
	const {
		state: {
			options: { isSorting },
		},
		updateState,
	} = useStateManager();

	const onSorting = () => {
		updateState({
			options: {
				isSorting: !isSorting,
			},
		});
	};

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
