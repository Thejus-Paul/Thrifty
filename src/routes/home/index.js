import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './style.css';
import Navigation from '../../components/Navigation';
import cashIcon from './cash.svg';
import cardIcon from './card.svg';

const Card = (props) => (
	<div className="card">
		<span className="title">{props.name}</span>
		<span className="amount">{props.amount}</span>
	</div>
);

const addIcon = (card) => (card ? 
	<object type="image/svg+xml" data={cardIcon}>
		Your browser does not support SVG
	</object> :
	<object type="image/svg+xml" data={cashIcon}>
		Your browser does not support SVG
	</object>
);

const addAmount = (sign, amount) => ( sign ? 
	<span className="amount">{'+'.concat(amount)}</span> :
	<span className="amount">{'-'.concat(amount)}</span>
);

const Statement = (props) => (
	<div>
		<div className="list">
			<div className="box">
				{ addIcon(props.byCard) }
				&nbsp;&nbsp;&nbsp;
				<span className="name">{props.name}</span>
			</div>
			{ addAmount(props.credit, props.amount) }
		</div>
		<hr />
	</div>
);

const MiniStatements = () => {
	let [miniStatements, setMiniStatements] = useState([{
		byCard: true,
		name: "Fetching...",
		credit: false,
		amount: 0
	}]);
	useEffect(()=> {
	Axios({
		method: "POST",
		url: "https://sphinx-server.herokuapp.com/thrifty/miniStatements",
		headers: {
			"Content-Type": "application/json"
		}
		}).then(res => { 
		setMiniStatements(res.data.reverse())
	});
	}, []);
	
	return(
		<div className="statements_container">
			<h2> Mini Statements </h2>
			{ miniStatements.map((item,index) => 
				<Statement 
					key={index}
					byCard={item.byCard}
					name={item.name} 
					credit={item.credit}
					amount={item.amount}
				/>) }
		</div>
	);
}

const Home = () => {

	// To fetch card balance
	let [cardBalance, setCardBalance] = useState(0);
	useEffect(() => {
		Axios({
			method: "GET",
			url: "https://sphinx-server.herokuapp.com/thrifty/balance/card",
			headers: {
			  "Content-Type": "application/json"
			}
			}).then(res => { 
			setCardBalance(res.data.amount)
		});
	}, [cardBalance]);

	// To fetch cash balance
	let [cashBalance, setCashBalance] = useState(0);
	useEffect(()=> {
		Axios({
			method: "GET",
			url: "https://sphinx-server.herokuapp.com/thrifty/balance/cash",
			headers: {
				"Content-Type": "application/json"
			}
			}).then(res => { 
			setCashBalance(res.data.amount)
		});
	}, [cashBalance]);

	return(
		<div className="home">
			<div className="balance_container">
				<Card name="Cash" amount={cashBalance} />
				<Card name="Card" amount={cardBalance} />
				<Link to="/add_money" style={{ textDecoration: 'none' }}>
				<button className="button">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 22C6.47967 21.9939 2.00606 17.5203 2 12V11.8C2.10993 6.30453 6.63459 1.92796 12.1307 2.00088C17.6268 2.0738 22.0337 6.56888 21.9978 12.0653C21.9619 17.5618 17.4966 21.9989 12 22ZM7 11V13H11V17H13V13H17V11H13V7H11V11H7Z" fill="#2E3A59" />
					</svg>
					 Add Money 
				</button></Link>
			</div>
			<MiniStatements />
			<Navigation />
		</div>
)};

export default Home;
