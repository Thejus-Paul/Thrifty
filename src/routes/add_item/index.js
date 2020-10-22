import { h } from 'preact';
import InputBox from '../../components/InputBox';
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';
import style from './style';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';


const AddItem = () => {
	return(
		<div class={style.home}>
			<div class={style.titleBar}>
				<Link href="/" class={style.goBack}>
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.3025 5.27252L10.575 18L23.3025 30.7275L25.425 28.6065L14.817 18L25.425 7.39352L23.3025 5.27252Z" fill="#F2F2F2"/>
				</svg>
				</Link>
				<span class={style.title}> Add Item </span>
			</div>
			<div class={style.MainWindow}>
				<div>
					<InputBox name="Name" />
					<InputBox class={style.width} name="Category" />
					<div class={style.container}>
					<InputBox class={style.inputBox} name="Quantity" />
					<SelectBox name="Size" />
					</div>
					<InputBox name="Total Amount" />
				</div>
				<Button name="ADD" />
			</div>
		</div>
	);
	}

export default AddItem;
