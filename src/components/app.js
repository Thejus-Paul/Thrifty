import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import Home from '../routes/home';
import AddMoney from '../routes/add_money';
import AddItem from '../routes/add_item';
import Summary from '../routes/summary';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Summary path="/summary" />
					<AddItem path="/add_item" />
					<AddMoney path="/add_money" />
					<Home path="/" />
				</Router>
			</div>
		);
	}
}
