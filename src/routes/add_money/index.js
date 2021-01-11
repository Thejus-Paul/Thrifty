import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import Axios from 'axios';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import style from './style';

const AddMoney = () => {
	const [isCard, setCard] = useState(false);
	const [desc, setDesc] = useState('');
	const [money, setMoney] = useState(0);
	// To change the payment method in UI
	useEffect(() => {
		if(isCard === false) {
			document.getElementById("cash").removeAttribute("class");
			document.getElementById("card").setAttribute("class",style.inactive);
		} else {
			document.getElementById("card").removeAttribute("class");
			document.getElementById("cash").setAttribute("class",style.inactive);
		}
	},[isCard]);
	// To change the payment method
	const byCardPayment = () => setCard(true);
	const byCashPayment = () => setCard(false);

	const getDesc = (e) => setDesc(e.target.value);
	const getMoney = (e) => setMoney(parseInt(e.target.value,10));
	// To update balance
	const addDetails = () => {
		if(isNaN(money) === false && money !== 0) {
			let data = {
				byCard: isCard,
				name: desc,
				credit: false,
				amount: money
			}
			Axios
		  .post("http://localhost:3000/thrifty/balance", data)
		  .then(res => console.log(res))
		  .catch(err => console.log(err));
		  window.location.href = '/';
		}	  
	}

	return(
		<div class={style.home}>
			<Link href="/" class={style.goBack}>
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.3025 5.27252L10.575 18L23.3025 30.7275L25.425 28.6065L14.817 18L25.425 7.39352L23.3025 5.27252Z" fill="#F2F2F2" />
				</svg>
			</Link>
			<div class={style.container}>
				Add Money to
				<div class={style.options}>
					<img id="cash" onClick={byCashPayment} alt="Cash icon" src="https://img.icons8.com/color/96/cash-.png" />
					<img id="card" class={style.inactive} onClick={byCardPayment} alt="Credit Card icon" src="https://img.icons8.com/color/96/bank-card-back-side.png" />			
				</div>
			</div>
			<div class={style.secondaryWindow}>
				<div>
					<InputBox name="Description" value={getDesc} />
					<InputBox name="Amount" value={getMoney} />
				</div>
				<Button name="ADD" action={addDetails} />
			</div>
		</div>
	);
	}

export default AddMoney;
