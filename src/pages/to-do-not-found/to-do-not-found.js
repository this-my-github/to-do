import { Link } from 'react-router-dom';
import { MainInput } from '../../components';
import styles from './to-do-not-found.module.css';

export const TodoNotFound = () => (
	<>
		<MainInput>
			<Link to="/">←</Link>
		</MainInput>
		<div className={styles.wrapper}>Такой товар не существует</div>
	</>
);
