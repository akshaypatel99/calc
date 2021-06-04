import styled from 'styled-components';
import Calculator from './components/Calculator';

function App() {
	return (
		<StyledApp>
			<Calculator />
		</StyledApp>
	);
}

export default App;

const StyledApp = styled.div`
	background: white;
	height: 100vh;
	width: 100%;
	display: flex;
	place-items: center;
`;
