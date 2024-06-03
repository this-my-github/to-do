import styles from './button.module.css';

export const Button = ({ children, onClick, type = 'text', style }) => {
	return (
		<button
			className={style ? style : styles.button}
			type={type}
			onClick={(e) => onClick(e)}
		>
			{children}
		</button>
	);
};
