import {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import Home from './routes/home';
import AddMoney from './routes/add_money';
import AddItem from './routes/add_item';
import Summary from './routes/summary';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Switch>
						<Route path="/summary">
							<Summary />
						</Route>
						<Route path="/add_item">
							<AddItem />
						</Route>
						<Route path="/add_money">
							<AddMoney />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
