const defaultBookmarksState = []

export default (state = defaultBookmarksState, action) => {
	switch (action.type) {
		case 'ADD_BOOKMARK': 
			return [
				...state,
				action.bookmark
			];
		case 'REMOVE_BOOKMARK':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_BOOKMARK':
			return state.map((bookmark) => {
				if (bookmark.id === action.id) {
					return {
						...bookmark,
						...action.bookmark
					};
				} else {
					return bookmark;
				}
			});
		default: 
			return state;
	}
}