import { createStore, combineReducers } from 'redux';

import bookmarksReducer from './../reducers/bookmarksReducer';
import filtersReducer from './../reducers/filtersReducer';

export default () => {
	const store = createStore(
		combineReducers({
			bookmarks: bookmarksReducer,
			filters: filtersReducer
		})
	);
	return store;
};