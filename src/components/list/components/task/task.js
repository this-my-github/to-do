import { Link } from 'react-router-dom';
import styles from './task.module.css';

export const Task = ({ id, title, completed, onCompletedChange }) => {
	return (
		<div className={styles.task}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onCompletedChange(id, target.checked)}
			/>
			<Link to={`task/${id}`}>
				<div
					className={
						completed ? styles.descriptionCompletedTask : styles.description
					}
				>
					{title}
				</div>
			</Link>
		</div>
	);
};
