export const filterTodos = (searchText, listOfTodos) => {
	if (!searchText) {
		return listOfTodos;
	}
	return listOfTodos.filter(({ title }) =>
		title.toLowerCase().includes(searchText.toLowerCase()),
	);
};
