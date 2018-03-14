import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Divider } from 'semantic-ui-react';

import BookmarksList from './BookmarksList';
import { sortByUsage, sortByDate } from './../actions/filters';

const Dashboard = (props) => (
	<div>
		{props.bookmarks.length > 1 && (
			<div>
				<Dropdown
					text='Filter' 
					icon='filter' 
					floating labeled button 
					className='icon'>
					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() => { props.dispatch(sortByDate()) }}
						>By Date</Dropdown.Item>
						<Dropdown.Item
							onClick={() => { props.dispatch(sortByUsage()) }}
						>By Usage</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Divider />
			</div>
		)}
		<BookmarksList />
	</div>
);

const mapStateToProps = (state) => {
	return {
		bookmarks: state.bookmarks
	};
};

export default connect(mapStateToProps)(Dashboard);