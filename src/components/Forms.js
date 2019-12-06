import styled from 'styled-components/macro'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	margin: 25px;
	padding: 20px;
	letter-spacing: 1.5px;
`

export const LogInForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	letter-spacing: 1.5px;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(to bottom, #1f2f98, #1ca7ec);
`

export const Label = styled.label`
	margin-top: 20px;
	padding-left: 10px;
`

export const Input = styled.input`
	padding: 15px;
	margin-top: ${props => props.marginTop};
	background: #fdfdfd;
	border: none;
	border-radius: 2px;
	box-shadow: none;
	font-size: 16px;
`
