import React from 'react';
import './style.css';

const WishCard = (props) => {
    return(
        <div className="wishCard">
            <div className="image">
                <img src={props.url} alt={props.itemName} />
            </div>
            <div className="details">
                <span className="itemName">{props.itemName}</span>
                <span className="price">Rs. {props.price}</span>
                <span className="research">Research Period: <span className="period">{props.research} days</span></span>
            </div>
        </div>
    )
}

export default WishCard;