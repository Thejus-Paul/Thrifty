import { h } from 'preact';
import InputBox from '../../components/InputBox/InputBox';
import style from './style';
import { useState } from 'preact/hooks';


const inactive = (method) => { 
	if(method === "card") {
		document.getElementById("cash").removeAttribute("class");
		document.getElementById("card").setAttribute("class",style.inactive);
	} else {
		document.getElementById("card").removeAttribute("class");
		document.getElementById("cash").setAttribute("class",style.inactive);
	}
}

const AddMoney = () => {
	const [byCard, setByCard] = useState(false);
	const byCardPayment = () => {
		setByCard(true);
		inactive("cash");
	}
	const byCashPayment = () => {
		setByCard(false);
		inactive("card");
	}
		
	return(
		<div class={style.home}>
			<div class={style.container}>
				Add Money to
				<div class={style.options}>
					<img id="cash" onClick={byCashPayment} alt="Cash icon" src="https://img.icons8.com/color/96/cash-.png"/>
					<img id="card" class={style.inactive} onClick={byCardPayment} alt="Credit Card icon" src="https://img.icons8.com/color/96/bank-card-back-side.png"/>			
				</div>
			</div>
			<div class={style.secondaryWindow}>
				<InputBox name="Description" />
				<InputBox name="Amount" />
			</div>
		</div>
	);
	}

export default AddMoney;
