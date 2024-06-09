import { Route, Routes } from 'react-router-dom';
import { MainPage, TaskPage, PageNotExists, TodoLoadError, TodoNotFound } from './pages';
import styles from './app.module.css';

export const App = () => (
	<div className={styles.app}>
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="task/:id" element={<TaskPage />} />
			<Route path="/todo-load-error" element={<TodoLoadError />} />
			<Route path="/todo-not-exist" element={<TodoNotFound />} />
			<Route path="*" element={<PageNotExists />} />
		</Routes>
	</div>
);
