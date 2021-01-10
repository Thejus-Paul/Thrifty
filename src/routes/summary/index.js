import { h } from 'preact';
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';
import style from './style';

const Summary = () => {
	return(
		<div class={style.home}>
			<div class={style.container}>
				Summary Report For
                <div class={style.selectBox}><SelectBox /></div>
			</div>
			<div class={style.secondaryWindow}>

				<Button name="GENERATE REPORT" />
			</div>
			
		</div>
	);
	}

export default Summary;
