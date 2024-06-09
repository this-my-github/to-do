import { Link } from 'react-router-dom';
import { MainInput } from '../../components';
import styles from './page-not-exists.module.css';

export const PageNotExists = () => (
	<>
		<MainInput>
			<Link to="/">←</Link>
		</MainInput>
		<div className={styles.wrapper}>Ошибка, страница была не найдена</div>
	</>
);
