import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
/* import SelectBox from '../../components/SelectBox'; */
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
		</div>)
};

const AddItem = () => {
	let history = useHistory();
	let [itemName, setItemName] = useState('');
	let [group, setGroup] = useState('');
	/* let [quantity, setQuantity] = useState(1); */
	let [total, setTotal] = useState(0);
	const [isCard, setCard] = useState(false);

	const getItemName = (e) => setItemName(e.target.value);
	const getGroup = (e) => setGroup(e.target.value);
	/* const getQuantity = (e) => setQuantity(parseInt(e.target.value,10)); */
	const getTotal = (e) => setTotal(parseInt(e.target.value,10));
	const byCardPayment = () => setCard(true);
	const byCashPayment = () => setCard(false);

	useEffect(() => {
		if(isCard === false) {
			document.getElementById("cash").removeAttribute("class");
			document.getElementById("card").setAttribute("class","inactive");
		} else {
			document.getElementById("card").removeAttribute("class");
			document.getElementById("cash").setAttribute("class","inactive");
		}
	},[isCard]);

	const addDetails = () => {
		if(isNaN(total) === false 
		&& total > 0 
		&& itemName !== '' 
		&& group !== '') {
			let data = {
				byCard: isCard,
				name: itemName,
				category: group,
				credit: false,
				amount: total
			}

			Axios
		  .post("https://sphinx-server.herokuapp.com/thrifty/item", data)
		  .then((res) => {console.log(res) })
		  .catch((err) => {console.log(err)})
		  .finally(() => {window.location.href = '/'})
		  setTimeout(()=> history.goBack(), 300);
		}	   
	}
	return(
		<div className="home">
			<div className="titleBar">
				<Link to="/" className="goBack">
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.3025 5.27252L10.575 18L23.3025 30.7275L25.425 28.6065L14.817 18L25.425 7.39352L23.3025 5.27252Z" fill="#F2F2F2" />
				</svg>
				</Link>
				<span className="title"> Add Item </span>
			</div>
			<div className="MainWindow">
				<div>
					<InputBox type="text" name="Name" value={getItemName} />
					<InputBox type="text" className="width" name="Category" value={getGroup} />
				{/*	<div className="container">
 					<InputBox className={style.inputBox} name="Quantity" value={getQuantity} />
					<SelectBox name="Size" /> 
					</div> */}
					<InputBox type="number" name="Total Amount" value={getTotal} />
				</div>
				<div className="type">
					<div className="options">
						<img id="cash" onClick={byCashPayment} alt="Cash icon" src="https://img.icons8.com/color/96/cash-.png" />
						<img id="card" className="inactive" style={{marginTop: "10px"}} onClick={byCardPayment} alt="Credit Card icon" src="https://img.icons8.com/color/96/bank-card-back-side.png" />			
					</div>
				</div>
				<Button name="ADD" action={addDetails} />
			</div>
		</div>
	);
	}

export default AddItem;
