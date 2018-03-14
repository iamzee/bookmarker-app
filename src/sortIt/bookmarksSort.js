import moment from 'moment';

export default (bookmarks, { sortBy }) => {
	return bookmarks.sort((a, b) => {
		if (sortBy === 'usage') {
			return a.score < b.score ? 1 : -1;
		} else if ( sortBy === 'date') {
			return moment(a.createdAt).isBefore(b.createdAt) ? 1 : -1;
		}
	});
};