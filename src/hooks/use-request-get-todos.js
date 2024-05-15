import { useEffect, useState } from 'react';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsError(false);
		fetch(TODOS_URL)
			.then((response) => {
				if (response.ok !== true) {
					throw new Error('Error with get data');
				}
				return response.json();
			})
			.then((loadedDate) => {
				setTodos(loadedDate);
			})
			.catch((err) => setIsError(err.message))
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return { todos, isLoading, isError };
};
