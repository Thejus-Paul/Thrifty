import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import './style.css';

const WishList = () => {
	return(
		<div className="home">
			<div className="titleBar">
				<Link to="/" className="goBack">
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.3025 5.27252L10.575 18L23.3025 30.7275L25.425 28.6065L14.817 18L25.425 7.39352L23.3025 5.27252Z" fill="#F2F2F2" />
				</svg>
				</Link>
				<span className="title"> Wish List </span>
			</div>
			<div className="wishList">

			</div>
			<Navigation />
		</div>
	);
}

export default WishList;
