import { h } from 'preact';
import style from './style';
import MainBox from '../../components/MainBox/MainBox';
import MiniStatements from '../../components/MiniStatements/MiniStatements';

const Home = () => (
	<div class={style.home}>
		<MainBox />
		<MiniStatements />
	</div>
);

export default Home;
