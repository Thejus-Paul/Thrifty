import React from 'react';
/* import SelectBox from '../../components/SelectBox'; */
import './style.css';

const Button = (props) => <button className="button" onClick={props.action}>{props.name}</button>


const Summary = () => {
	return(
		<div className="home">
			<div className="container">
				Summary Report For
                <div className="selectBox">{/* <SelectBox /> */}</div>
			</div>
			<div className="secondaryWindow">

				<Button name="GENERATE REPORT" />
			</div>
			
		</div>
	);
}

export default Summary;
