import React from 'react';
import { Form, Button, Segment, Message } from 'semantic-ui-react';
import validator from 'validator';

export default class BookmarkForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		title: props.bookmark ? props.bookmark.title : '',
		url: props.bookmark ? props.bookmark.url : '',
		note: props.bookmark ? props.bookmark.note : '',
		error: ''
		};
	};
	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};
	onUrlChange = (e) => {
		const url = e.target.value;
		this.setState(() => ({ url }));
	};
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }))
	};
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.title || !this.state.url) {
			this.setState(() => ({ error: (<Message
						negative
						header="Action Forbidden"
						content="You have to fill title and url to add a bookmark"
					/>) }));
		} else {
			if (!validator.isURL(this.state.url)) {
				this.setState(() => ({ error: (<Message 
					negative
					header="Action Forbidden"
					content="Please enter the correct URL format"
				/>) }));
			} else {
				this.props.onSubmit({
					title: this.state.title,
					url: this.state.url,
					note: this.state.note
				});
			}
		}
	};
	render() {
		return (
			<Segment>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<label>Title</label>
						<input 
							value={this.state.title} 
							onChange={this.onTitleChange} 
							autoFocus
							type="text" 
							placeholder="Title of the bookmark" />
					</Form.Field>
					<Form.Field>
						<label>Url</label>
						<input 
							value={this.state.url}
							onChange={this.onUrlChange}
							type="text" 
							placeholder="Url of the bookmark" />
					</Form.Field>
					<Form.Field>
						<label>Note</label>
						<textarea 
							value={this.state.note}
							onChange={this.onNoteChange}
							placeholder="You can add additional note to your bookmark (optional)">
						</textarea>
					</Form.Field>
					{this.state.error && this.state.error}
					<Button type="submit">Save</Button>
				</Form>
			</Segment>
		);
	}
}