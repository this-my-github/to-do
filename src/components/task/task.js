import { useState } from 'react';
import styles from './task.module.css';

export const Task = ({ id, title, completed }) => {
	const [isCompleted, setIsCompleted] = useState(completed);

	return (
		<div className={styles.task}>
			<input
				className={styles.checkbox}
				checked={isCompleted}
				onChange={() => setIsCompleted(!isCompleted)}
				type="checkbox"
			/>
			{isCompleted ? (
				<div className={styles.descriptionCompletedTask} key={id}>
					{title}
				</div>
			) : (
				<div className={styles.description} key={id}>
					{title}
				</div>
			)}
			<button className={styles.deleteBtn}>╳</button>
		</div>
	);
};
