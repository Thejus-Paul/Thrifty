import style from './style.css';
import Statement from './Statement';

const state = {
	statements : [
		{
			byCard: true,
			name: "Internet Bill",
			credit: false,
			amount: 1063.00
		},
		{
			byCard: false,
			name: "Notebook",
			credit: false,
			amount: 86.52
		},
		{
			byCard: true,
			name: "Milkshake w/ Ice Cream",
			credit: false,
			amount: 150.00
		},
		{
			byCard: false,
			name: "Pocket Money",
			credit: true,
			amount: 1500.00
		},
	]
}

const SecondaryScreen = () => (
	<div class={style.container}>
		<h2> Mini Statements </h2>
		{ state.statements.map((item) => 
			<Statement 
				byCard={item.byCard}
				name={item.name} 
				credit={item.credit}
				amount={item.amount}
			/>) }
	</div>
);

export default SecondaryScreen;
