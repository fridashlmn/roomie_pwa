import styled from 'styled-components/macro'

export const Button = styled.button`
	align-self: center;
	width: 250px;
	padding: 10px;
	margin: 30px;
	background: #787ff6;
	font-size: 26px;
	font-weight: bold;
	color: #fbfbfb;
	border: none;
	border-radius: 50px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	transition: 0.35s;
	&:active {
		background: #1ca7ec;
	}
`

export const PostButton = styled.button`
	align-self: center;
	width: 250px;
	padding: 5px;
	margin: 30px;
	background: #787ff6;
	font-size: 20px;
	font-weight: bold;
	color: #fbfbfb;
	border: none;
	border-radius: 50px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
