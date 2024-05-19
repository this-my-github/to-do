import { useEffect, useState } from 'react';
import { TODOS_URL } from '../constants';
import { filterTodos } from '../utils';

export const useRequestSortTodos = ({ refreshProducts, newTodo, isSorting }) => {
	const [sortedTodos, setSortedTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsError(false);
		const Debounce = setTimeout(() => {
			fetch(`${TODOS_URL}?_sort=title`)
				.then((response) => {
					if (response.ok !== true) {
						throw new Error('Error with get data');
					}
					return response.json();
				})
				.then((loadedDate) => {
					const findedTodos = filterTodos(newTodo, loadedDate);
					setSortedTodos(findedTodos);
				})
				.catch((err) => setIsError(err.message))
				.finally(() => {
					setIsLoading(false);
				});
		}, 300);

		return () => clearTimeout(Debounce);
	}, [refreshProducts, newTodo, isSorting]);

	return { sortedTodos, setSortedTodos, isLoading, isError };
};
