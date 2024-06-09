import { Link } from 'react-router-dom';
import { MainInput } from '../../components';
import styles from './to-do-load-error.module.css';

export const TodoLoadError = () => (
	<>
		<MainInput>
			<Link to="/">←</Link>
		</MainInput>
		<div className={styles.wrapper}>
			Ошибка загрузки товара, попробуйте ещё раз позднее
		</div>
	</>
);
