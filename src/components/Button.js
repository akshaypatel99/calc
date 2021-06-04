import styled from 'styled-components';

const Button = ({ content, onButtonClick, type }) => {
	return (
		<StyledButton
			className={`${content === '0' ? 'zero' : ''} ${type || ''}`}
			onClick={onButtonClick(content)}
		>
			{content}
		</StyledButton>
	);
};

export default Button;

const StyledButton = styled.div`
	align-items: center;
	background: #333;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	font-size: 45px;
	height: 110px;
	justify-content: center;
	width: 110px;
	transition: filter 0.1s ease-in;

	&:active,
	&:focus {
		filter: brightness(130%);
	}

	&.zero {
		width: 250px;
		grid-column: 1 / span 2;
		border-radius: 57.5px;
		position: relative;
		justify-content: flex-start;
		padding-left: 43px;
	}

	&.function {
		color: black;
		background: #a5a5a5;
	}

	&.operator {
		background: #f1a33c;
	}
`;
