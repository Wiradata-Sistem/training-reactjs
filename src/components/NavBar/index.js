import { Link } from 'react-router-dom';
import StyleNav from './style.js';

const App = (props) => {
	return (
		<StyleNav className='navbar navbar-light'>
			<ul className='nav navbar-nav'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/apa-kabar/Budi'>Apa Kabar</Link></li>
			</ul>
		 </StyleNav>
	);
};

export default App;
