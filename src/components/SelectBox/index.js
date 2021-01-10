import { h } from 'preact';
import style from './style.css';

const SelectBox = (props) => (
	<div class={style.container}>
		<span class={style.name}>{props.name}</span>
		<select class={style.input}>
			<option> finite </option>
			<option> KG </option>
			<option> Litre </option>
			<option> gram </option>
		</select>
	</div>
);

export default SelectBox;
