import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect } from 'preact/hooks';
import Axios from 'axios';
import style from './style';
import Card from '../../components/Card';
import MiniStatements from '../../components/MiniStatements';
import Navigation from '../../components/Navigation';


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

	  // To fetch card balance
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
		<div class={style.home}>
			<div class={style.container}>
				<Card name="Cash" amount={cashBalance} />
				<Card name="Card" amount={cardBalance} />
				<Link href="/add_money">
				<button class={style.button}>
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
