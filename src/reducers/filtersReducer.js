const defaultfiltersState = {
	sortBy: 'date'
};

export default (state = defaultfiltersState, action) => {
	switch (action.type) {
		case 'SORT_BY_USAGE':
			return {
				sortBy: 'usage'
			};
		case 'SORT_BY_DATE': 
			return {
				sortBy: 'date'
			}
		default: 
			return state;
	}
}