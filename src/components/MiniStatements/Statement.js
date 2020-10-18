import style from './style.css';
import cashIcon from './cash.svg';
import cardIcon from './card.svg';

const addIcon = (card) => (card ? 
	<object type="image/svg+xml" data={cardIcon}>
		Your browser does not support SVG
	</object> :
	<object type="image/svg+xml" data={cashIcon}>
		Your browser does not support SVG
	</object>
);

const addAmount = (sign, amount) => ( sign ? 
	<span class={style.amount}>{'+' + amount}</span> :
	<span class={style.amount}>{'-' + amount}</span>
);

const Statement = (props) => (
	<div>
		<div class={style.list}>
			<div class={style.box}>
				{ addIcon(props.byCard) }
				&nbsp;&nbsp;&nbsp;
				<span class={style.name}>{props.name}</span>
			</div>
			{ addAmount(props.credit, props.amount) }
		</div>
		<hr/>
	</div>
);

export default Statement;
