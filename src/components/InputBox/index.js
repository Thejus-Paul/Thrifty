import { h } from 'preact';
import style from './style.css';

const InputBox = (props) => {
	return(
		<div class={style.container}>
			<span class={style.name}>{props.name}</span>
			<input type="text" class={style.input} onChange={props.value} />
		</div>
)};

export default InputBox;
