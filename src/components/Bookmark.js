import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeBookmark } from './../actions/bookmarks';

const Bookmark = (props) => (
	<Segment>
		<h3>
			<a 
				onClick={() => props.bookmark.score++}
				href={props.bookmark.url} 
				target="_blank"
			>
					{props.bookmark.title}
			</a>
		</h3>
		<p>{props.bookmark.note}</p>
		<Link to={`/edit/${props.bookmark.id}`}>
			<Button
				animated='vertical'>
				<Button.Content hidden>Edit</Button.Content>
				<Button.Content visible>
					<Icon name='edit' />
				</Button.Content>
			</Button>
		</Link>
		<Button 
			onClick={() => props.dispatch(removeBookmark({ id: props.bookmark.id }))} 
			animated='vertical'>
			<Button.Content hidden>Delete</Button.Content>
			<Button.Content visible>
				<Icon name='trash outline' />
			</Button.Content>
		</Button>
	</Segment>
);

export default connect()(Bookmark);