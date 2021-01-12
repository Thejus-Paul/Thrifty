import { h } from 'preact';
import style from './style.css';

const Button = (props) => <button class={style.button} onClick={props.action}>{props.name}</button>

export default Button;
