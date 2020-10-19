import { h } from 'preact';
import style from './style';
import MainBox from '../../components/MainBox/MainBox';
import MiniStatements from '../../components/MiniStatements/MiniStatements';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => (
	<div class={style.home}>
		<MainBox />
		<MiniStatements />
		<Navigation />
	</div>
);

export default Home;
