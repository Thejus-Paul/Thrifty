import { h } from 'preact';
import style from './style.css';

const Card = (props) => (
	<div class={style.card}>
		<span class={style.title}>{props.name}</span>
		<span class={style.amount}>{props.amount}</span>
	</div>
);

export default Card;
