import style from './style.css';
import Statement from './Statement';
import { useState, useEffect } from 'preact/hooks';
import Axios from 'axios';

const SecondaryScreen = () => {
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
		<div class={style.container}>
			<h2> Mini Statements </h2>
			{ miniStatements.map((item) => 
				<Statement 
					byCard={item.byCard}
					name={item.name} 
					credit={item.credit}
					amount={item.amount}
				/>) }
		</div>
	);
}

export default SecondaryScreen;
