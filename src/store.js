import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { editingTodoReducer, optionsReducer, todosReducer } from './reducers';

const reducer = combineReducers({
	todos: todosReducer,
	options: optionsReducer,
	editingTodo: editingTodoReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
