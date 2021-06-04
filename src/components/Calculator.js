import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import numberFix from '../utils/number';

const Calculator = () => {
	const [value, setValue] = useState('0');
	const [memory, setMemory] = useState(null);
	const [operator, setOperator] = useState(null);

	const buttonHandler = (content) => () => {
		const num = parseFloat(value);

		if (content === 'AC') {
			setValue('0');
			setMemory(null);
			setOperator(null);
			return;
		}

		if (content === '±') {
			setValue((num * -1).toString());
			return;
		}

		if (content === '%') {
			setValue((num / 100).toString());
			setMemory(null);
			setOperator(null);

			return;
		}

		if (content === '.') {
			if (value.includes('.')) {
				return;
			}

			setValue(value + '.');
			return;
		}

		if (content === '+') {
			if (operator !== null) {
				if (operator === '+') {
					setMemory(memory + parseFloat(value));
				} else if (operator === '−') {
					setMemory(memory - parseFloat(value));
				} else if (operator === '×') {
					setMemory(memory * parseFloat(value));
				} else if (operator === '÷') {
					setMemory(memory / parseFloat(value));
				}
			} else {
				setMemory(parseFloat(value));
			}

			setValue('0');
			setOperator('+');

			return;
		}
		if (content === '−') {
			if (operator !== null) {
				if (operator === '+') {
					setMemory(memory + parseFloat(value));
				} else if (operator === '−') {
					setMemory(memory - parseFloat(value));
				} else if (operator === '×') {
					setMemory(memory * parseFloat(value));
				} else if (operator === '÷') {
					setMemory(memory / parseFloat(value));
				}
			} else {
				setMemory(parseFloat(value));
			}
			setValue('0');
			setOperator('−');

			return;
		}
		if (content === '÷') {
			if (operator !== null) {
				if (operator === '+') {
					setMemory(memory + parseFloat(value));
				} else if (operator === '−') {
					setMemory(memory - parseFloat(value));
				} else if (operator === '×') {
					setMemory(memory * parseFloat(value));
				} else if (operator === '÷') {
					setMemory(memory / parseFloat(value));
				}
			} else {
				setMemory(parseFloat(value));
			}
			setValue('0');
			setOperator('÷');

			return;
		}
		if (content === '×') {
			if (operator !== null) {
				if (operator === '+') {
					setMemory(memory + parseFloat(value));
				} else if (operator === '−') {
					setMemory(memory - parseFloat(value));
				} else if (operator === '×') {
					setMemory(memory * parseFloat(value));
				} else if (operator === '÷') {
					setMemory(memory / parseFloat(value));
				}
			} else {
				setMemory(parseFloat(value));
			}
			setValue('0');
			setOperator('×');

			return;
		}
		if (content === '=') {
			if (!operator) return;

			if (operator === '+') {
				setValue((memory + parseFloat(value)).toString());
			} else if (operator === '−') {
				setValue((memory - parseFloat(value)).toString());
			} else if (operator === '×') {
				setValue((memory * parseFloat(value)).toString());
			} else if (operator === '÷') {
				setValue((memory / parseFloat(value)).toString());
			}
			setOperator(null);
			setMemory(null);
			return;
		}

		if (value[value.length - 1] === '.') {
			setValue(value + content);
		} else {
			setValue(parseFloat(num + content).toString());
		}
	};

	return (
		<StyledCalc>
			<Top />
			<Display>{numberFix(value)}</Display>
			<ButtonsContainer>
				<Button onButtonClick={buttonHandler} content='AC' type='function' />
				<Button onButtonClick={buttonHandler} content='±' type='function' />
				<Button onButtonClick={buttonHandler} content='%' type='function' />
				<Button onButtonClick={buttonHandler} content='÷' type='operator' />
				<Button onButtonClick={buttonHandler} content='7' />
				<Button onButtonClick={buttonHandler} content='8' />
				<Button onButtonClick={buttonHandler} content='9' />
				<Button onButtonClick={buttonHandler} content='×' type='operator' />
				<Button onButtonClick={buttonHandler} content='4' />
				<Button onButtonClick={buttonHandler} content='5' />
				<Button onButtonClick={buttonHandler} content='6' />
				<Button onButtonClick={buttonHandler} content='−' type='operator' />
				<Button onButtonClick={buttonHandler} content='1' />
				<Button onButtonClick={buttonHandler} content='2' />
				<Button onButtonClick={buttonHandler} content='3' />
				<Button onButtonClick={buttonHandler} content='+' type='operator' />
				<Button onButtonClick={buttonHandler} content='0' />
				<Button onButtonClick={buttonHandler} content='.' />
				<Button onButtonClick={buttonHandler} content='=' type='operator' />
			</ButtonsContainer>
			<Bottom />
		</StyledCalc>
	);
};

export default Calculator;

const StyledCalc = styled.div`
	background: black;
	border-radius: 50px;
	color: white;
	height: 1218px;
	padding: 20px;
	position: relative;
	width: 563px;
	margin: 0 auto;
`;

const Top = styled.div`
	display: flex;
	height: 250px;
	justify-content: space-between;
	padding: 0 20px;
`;

const Display = styled.div`
	font-size: 130px;
	font-weight: 300;
	margin-bottom: 20px;
	text-align: right;
`;

const ButtonsContainer = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
`;

const Bottom = styled.div`
	position: absolute;
	width: 200px;
	height: 5px;
	background: white;
	bottom: 10px;
	left: 50%;
	border-radius: 4px;
	transform: translateX(-50%);
`;
