import React from 'react';
import { connect } from 'react-redux';

import BookmarkForm from './BookmarkForm';
import { editBookmark } from './../actions/bookmarks';

const EditBookamark = (props) => (
	<div>
		<BookmarkForm 
			bookmark={props.bookmark}
			onSubmit={(bookmark) => {
				props.dispatch(editBookmark(props.match.params.id, bookmark));
				console.log(bookmark);
				props.history.push('/');
			}}
		/>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		bookmark: state.bookmarks.find(({ id }) => id === props.match.params.id)
	};
}

export default connect(mapStateToProps)(EditBookamark);