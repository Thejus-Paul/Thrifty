import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import Axios from 'axios';
import './style.css';

const Button = (props) => <button className="button" onClick={props.action}>{props.name}</button>

const InputBox = (props) => {
	return (props.type === "number") ? (
		<div className="input_container">
			<span className="name">{props.name}</span>
			<input type="number" className="input" min="1" onChange={props.value} required/>
		</div>) : (
		<div className="input_container">
			<span className="name">{props.name}</span>
			<input type="text" className="input" onChange={props.value} required />
		</div>
		)
};

const AddMoney = () => {
	let history = useHistory();
	const [isCard, setCard] = useState(false);
	const [desc, setDesc] = useState('');
	const [money, setMoney] = useState(0);
	// To change the payment method in UI
	useEffect(() => {
		if(isCard === false) {
			document.getElementById("cash").removeAttribute("class");
			document.getElementById("card").setAttribute("class","inactive");
		} else {
			document.getElementById("card").removeAttribute("class");
			document.getElementById("cash").setAttribute("class","inactive");
		}
	},[isCard]);
	// To change the payment method
	const byCardPayment = () => setCard(true);
	const byCashPayment = () => setCard(false);

	const getDesc = (e) => setDesc(e.target.value);
	const getMoney = (e) => setMoney(parseInt(e.target.value,10));
	// To update balance
	const addDetails = () => {
		if(isNaN(money) === false && money > 0) {
			let data = {
				byCard: isCard,
				name: desc,
				credit: true,
				amount: money
			}
		Axios
		  .post("https://sphinx-server.herokuapp.com/thrifty/balance", data)
		  .catch((err) => {console.log(err)});
		}	  
		setTimeout(()=> history.goBack(), 300);
	}

	return(
		<div className="home">
			<Link to="/" className="goBack">
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.3025 5.27252L10.575 18L23.3025 30.7275L25.425 28.6065L14.817 18L25.425 7.39352L23.3025 5.27252Z" fill="#F2F2F2" />
				</svg>
			</Link>
			<div className="options_container">
				Add Money to
				<div className="options">
					<img id="cash" onClick={byCashPayment} alt="Cash icon" src="https://img.icons8.com/color/96/cash-.png" />
					<img id="card" className="inactive" onClick={byCardPayment} alt="Credit Card icon" src="https://img.icons8.com/color/96/bank-card-back-side.png" />			
				</div>
			</div>
			<div className="secondaryWindow">
				<div>
					<InputBox name="Description" type="text" value={getDesc} />
					<InputBox name="Amount" type="number" value={getMoney} />
				</div>
				<Button name="ADD" action={addDetails} />
			</div>
		</div>
	);
	}

export default AddMoney;
