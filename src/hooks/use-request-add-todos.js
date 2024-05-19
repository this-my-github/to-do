import { useState } from 'react';
import { TODOS_URL } from '../constants';

export const useRequestAddTodos = ({ newTodo, refreshProducts, setRefreshProducts }) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodo = () => {
		setIsCreating(true);
		// setIsError(false);

		fetch(TODOS_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTodo,
				completed: false,
			}),
		})
			.then((response) => {
				// if (response.ok !== true) {
				// 	throw new Error('Error with get data');
				// }
				return response.json();
			})
			.then((loadedDate) => {
				setRefreshProducts(!refreshProducts);
			})
			// .catch((err) => setIsError(err.message))
			.finally(() => setIsCreating(false));
	};

	return { requestAddTodo, isCreating };
};
