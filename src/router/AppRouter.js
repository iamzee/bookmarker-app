import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './../components/Header';
import Dashboard from './../components/Dashboard';
import CreateBookmark from './../components/CreateBookmark';
import EditBookmark from './../components/EditBookmark';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact={true} path="/" component={Dashboard} />
				<Route path="/create" component={CreateBookmark} />
				<Route path="/edit/:id" component={EditBookmark} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;