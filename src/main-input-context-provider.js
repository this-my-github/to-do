import { NewTodoContext, SortingContext } from './context';

export const MainInputContextProvider = ({ sortingValue, newTodoValue, children }) => {
	return (
		<SortingContext.Provider value={sortingValue}>
			<NewTodoContext.Provider value={newTodoValue}>
				{children}
			</NewTodoContext.Provider>
		</SortingContext.Provider>
	);
};
