import uuid from 'uuid';
import moment from 'moment';

export const addBookmark = ({ title, url, note = '', createdAt = moment().format(), score=0 }) => ({
	type: 'ADD_BOOKMARK',
	bookmark: {
		id: uuid(),
		title,
		url,
		note,
		createdAt,
		score
	}
});

export const removeBookmark = ({ id }) => ({
	type: 'REMOVE_BOOKMARK',
	id
});

export const editBookmark = (id, bookmark) => ({
	type: 'EDIT_BOOKMARK',
	id, 
	bookmark
});