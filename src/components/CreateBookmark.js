import React from 'react';
import { connect } from 'react-redux';

import BookmarkForm from './BookmarkForm';
import { addBookmark } from './../actions/bookmarks';

const CreateBookmark = (props) => (
	<div>
		<BookmarkForm onSubmit={(bookmark) => {
			props.dispatch(addBookmark({
				title: bookmark.title,
				url: bookmark.url,
				note: bookmark.note
			}));
			props.history.push('/');
		}} />
	</div>
);

export default connect()(CreateBookmark);