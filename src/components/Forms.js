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

export const AuthForm = styled.form`
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

export const PostingForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: ${props => props.marginTop || '20px'};
	letter-spacing: 1.5px;
`

export const Label = styled.label`
	margin-top: 20px;
	padding-left: 10px;
`

export const Input = styled.input`
	padding: 15px;
	margin-top: ${props => props.marginTop};
	min-width: 300px;
	background: #fdfdfd;
	border-radius: 2px;
	border: none;
	font-size: 16px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const PostInput = styled.input`
	margin-top: ${props => props.marginTop};
	padding: 15px;
	resize: none;
	min-height: ${props => props.minHeight || '150px'};
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	min-width: 300px;
	overflow: auto;
	background: #fdfdfd;
	border: none;
	border-radius: 2px;
	font-size: 16px;
`
