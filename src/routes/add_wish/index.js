import React,{ useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


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

const AddWish = () => {
	let history = useHistory();
	let [itemName, setItemName] = useState('');
	let [url, setURL] = useState('');
	let [total, setTotal] = useState(0);

	const getItemName = (e) => setItemName(e.target.value);
	const getURL = (e) => setURL(e.target.value);
	const getTotal = (e) => setTotal(parseInt(e.target.value,10));

	const addDetails = () => {
		if(isNaN(total) === false 
		&& total > 0 
		&& itemName !== '' 
		&& url !== '') {
			let data = {
				itemName: itemName,
				url: url,
				price: total,
				research: 10
			}

			Axios
		  .post("https://sphinx-server.herokuapp.com/thrifty/wish", data)
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
					<InputBox type="text" className="width" name="URL" value={getURL} />
					<InputBox type="number" name="Price" value={getTotal} />
				</div>
				<Button name="ADD" action={addDetails} />
			</div>
		</div>
	);
	}

export default AddWish;