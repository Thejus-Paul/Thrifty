import { h } from 'preact';
import style from './style';

let state = {
	balance: 0
}

const Home = () => (
	<div class={style.home}>
		<h1>Thrifty</h1>
		<span> Balance: {state.balance}</span><br/>
	</div>
);

export default Home;
