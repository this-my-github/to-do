import { HTTP_METHOD } from '../constants';

const fetchServer = (method, { id, one, ...payload } = {}) => {
	let url = `http://localhost:4000/todos`;
	let options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};

	if (method === HTTP_METHOD.GET) {
		if (!one) {
			const { searchPhrase, isAlphabetSorting } = payload;
			const sortingParams = isAlphabetSorting
				? '_sort=title&_order=asc'
				: '_sort=id&_order=desc';
			url += `?${sortingParams}&title_like=${searchPhrase}`;
		} else {
			url += `/${id}`;
		}
	} else {
		if (method !== HTTP_METHOD.POST) {
			url += `/${id}`;
		}

		if (method !== HTTP_METHOD.DELETE) {
			options.body = JSON.stringify(payload);
		}
	}

	return fetch(url, options).then((response) => {
		if (response.ok !== true) {
			throw new Error('Error with get data');
		}
		return response.json();
	});
};

export const createTodo = (newTodo) => fetchServer('POST', newTodo);

export const readTodos = (searchPhrase = '', isAlphabetSorting = false) =>
	fetchServer('GET', { searchPhrase, isAlphabetSorting });

export const readTodo = (
	todoId,
	searchPhrase = '',
	isAlphabetSorting = false,
	one = true,
) => fetchServer('GET', { id: todoId, one, searchPhrase, isAlphabetSorting });

export const updateTodo = (todoData) => fetchServer('PATCH', todoData);

export const deleteTodo = (todoId) => fetchServer('DELETE', { id: todoId });
