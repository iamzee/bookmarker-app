import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	state = {
		activeItem: 'dashboard'
	};
	handleItemClick = (e, { name }) => {
		this.setState(() => ({ activeItem: name}));
	}
	render() {
		return (
			<Menu pointing secondary>
				<Link to="/">
					<Menu.Item 
						name="dashboard"
						active={this.state.activeItem === 'dashboard'}
						onClick={this.handleItemClick}
					>
						Dashboard
					</Menu.Item>
				</Link>
				<Link to="/create">
					<Menu.Item 
						name="create"
						active={this.state.activeItem === 'create'}
						onClick={this.handleItemClick}
					>
						Create
					</Menu.Item>
				</Link>
			</Menu>
		);
	}
}
