import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import WishCard from '../../components/WishCard';
import './style.css';

const WishList = () => {
	const arr = [
		{
			itemName: "Zenfone 7",
			url: "https://www.mobiledokan.co/wp-content/uploads/2020/07/Asus-Zenfone-7.jpg",
			price: 50000,
			research: 20
		},
		{
			itemName: "Pixel 4a",
			url: "https://www.sprint.com/content/dam/sprint/us/en/device-assets/google/pixel-4a-5g/images/devicenb_650x900.png",
			price: 32000,
			research: 20
		}
	]

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
				{
					arr.map((wish,index) => <WishCard
						key={index}
						itemName={wish.itemName}
						url={wish.url}
						price={wish.price}
						research={wish.research} />
					)
				}
				<div className="btnContainer">
					<span className="addButton">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.25 10.25V17.75H7.75V10.25H0.25V7.75H7.75V0.25H10.25V7.75H17.75V10.25H10.25Z" fill="#F2F2F2"/>
						</svg>
					</span>
				</div>
			</div>
			<Navigation />
		</div>
	);
}

export default WishList;
