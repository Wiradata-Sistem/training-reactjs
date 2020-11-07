import { SelamatPagi } from '../../components';
import StyledDiv from './style.js';

const App = (props) => {
	console.log(props);
	return (
		<StyledDiv>
			<h1>Homepage</h1>
			<SelamatPagi name='Jacky'/>
		</StyledDiv>
	);
}
export default App;