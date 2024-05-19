import { useState } from 'react';
import { TODOS_URL } from '../constants';

export const useRequestUpdateTodos = ({
	id,
	updatedTodo,
	isCompleted,
	refreshProducts,
	setRefreshProducts,
}) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodo = () => {
		setIsUpdating(true);
		// setIsError(false);

		fetch(`${TODOS_URL}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: updatedTodo,
				completed: isCompleted,
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
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateTodo, isUpdating };
};
