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
import WishList from './routes/wish_list';
import AddWish from './routes/add_wish';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Switch>
						<Route path="/add_wish" component={AddWish} />
						<Route path="/wish_list" component={WishList} />
						<Route path="/summary" component={Summary} />
						<Route path="/add_item" component={AddItem} />
						<Route path="/add_money" component={AddMoney} />
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		);
	}
}
