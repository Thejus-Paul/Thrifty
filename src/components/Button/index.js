import { h, Component } from 'preact';
import style from './style.css';

const Button = (props) => <button class={style.button}>{props.name}</button>

export default Button;
