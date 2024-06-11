import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, InitialState } from './app';
import { StateManager } from './state-manager';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<StateManager initialState={InitialState}>
		<App />
	</StateManager>,
);
