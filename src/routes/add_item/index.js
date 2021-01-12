import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Axios from 'axios';
import InputBox from '../../components/InputBox';
/* import SelectBox from '../../components/SelectBox'; */
import Button from '../../components/Button';
import style from './style';
import { Link } from 'preact-router/match';


const AddItem = () => {
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
			document.getElementById("card").setAttribute("class",style.inactive);
		} else {
			document.getElementById("card").removeAttribute("class");
			document.getElementById("cash").setAttribute("class",style.inactive);
		}
	},[isCard]);

	const addDetails = () => {
		if(isNaN(total) === false 
		&& total !== 0 
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
		  .then(res => console.log(res))
		  .catch(err => console.log(err));
		  window.location.href = '/'; 
		}	   
	}
	return(
		<div class={style.home}>
			<div class={style.titleBar}>
				<Link href="/" class={style.goBack}>
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.3025 5.27252L10.575 18L23.3025 30.7275L25.425 28.6065L14.817 18L25.425 7.39352L23.3025 5.27252Z" fill="#F2F2F2" />
				</svg>
				</Link>
				<span class={style.title}> Add Item </span>
			</div>
			<div class={style.MainWindow}>
				<div>
					<InputBox name="Name" value={getItemName} />
					<InputBox class={style.width} name="Category" value={getGroup} />
					<div class={style.container}>
{/* 					<InputBox class={style.inputBox} name="Quantity" value={getQuantity} />
					<SelectBox name="Size" /> */}
					</div>
					<InputBox name="Total Amount" value={getTotal} />
				</div>
				<div class={style.type}>
					<div class={style.options}>
						<img id="cash" onClick={byCashPayment} alt="Cash icon" src="https://img.icons8.com/color/96/cash-.png" />
						<img id="card" class={style.inactive} style={{marginTop: "10px"}} onClick={byCardPayment} alt="Credit Card icon" src="https://img.icons8.com/color/96/bank-card-back-side.png" />			
					</div>
				</div>
				<Button name="ADD" action={addDetails} />
			</div>
		</div>
	);
	}

export default AddItem;
