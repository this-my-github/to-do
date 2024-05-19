import { useState } from 'react';
import { TODOS_URL } from '../constants';

export const useRequestDeleteTodos = ({ id, refreshProducts, setRefreshProducts }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = () => {
		setIsDeleting(true);
		// setIsError(false);

		fetch(`${TODOS_URL}/${id}`, {
			method: 'DELETE',
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
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteTodo, isDeleting };
};
