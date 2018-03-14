import React from 'react';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';
import { Message } from 'semantic-ui-react';

import Bookmark from './Bookmark';
import sortBookmarks from './../sortIt/bookmarksSort';

const BookmarksList = (props) => (
	<div>
		<FlipMove duration={750} easing="ease-out" maintainContainerHeight={true}>
			{props.bookmarks.length === 0 ? 
				<Message info>
					<Message.Header>No Bookmarks</Message.Header>
					<p>Click on Create to add your first bookmark</p>
				</Message> : 
				sortBookmarks(props.bookmarks, props.filters).map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark} />)}
		</FlipMove>
	</div>
);

const mapStateToProps = (state) => {
	return {
		bookmarks: state.bookmarks,
		filters: state.filters
	};
};

export default connect(mapStateToProps)(BookmarksList);