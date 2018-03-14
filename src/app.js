import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';

import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';

import { addBookmark, removeBookmark, editBookmark } from './actions/bookmarks';
import { sortByUsage } from './actions/filters';

const store = configureStore();

const bookmark1 = store.dispatch(addBookmark({ title: 'Google', url: 'https://google.com' }));
const bookmark2 = store.dispatch(addBookmark({ title: 'Wikipedia', url: 'https://wikipedia.com' }));
const bookmark3 = store.dispatch(addBookmark({ title: 'Facebook', url: 'https://facebook.com' }));
console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
