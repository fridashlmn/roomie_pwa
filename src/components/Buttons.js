import styled from 'styled-components/macro'

export const Button = styled.button`
	align-self: center;
	width: 250px;
	padding: 10px;
	margin: 30px;
	margin-top: ${props => props.marginTop || ''};
	background: #787ff6;
	font-size: ${props => props.fontSize || '20px'};
	font-weight: 500;
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
	align-self: left;
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

export const OpenButton = styled.div`
	font-size: 36px;
	color: #fdfdfd;
	background: #787ff6;
	border-radius: 50%;
	padding: 5px 15px;
	font-weight: thin;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

	&.open {
		visibility: hidden;
	}
`

export const OpenButtonBig = styled.button`
	color: #fdfdfd;
	background: #787ff6;
	border-radius: 50%;
	font-weight: thin;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	border: none;
	bottom: 0;
	right: 0;
	width: 70px;
	position: absolute;
	margin: 20px;
	text-align: center;
	font-size: 59px;
	font-weight: 300;
	&.open {
		visibility: hidden;
	}
`

export const CloseButton = styled.div`
	font-size: 36px;
	color: #fdfdfd;
	background: #787ff6;
	border-radius: 50%;
	padding: 5px 15px;
	font-weight: thin;
	letter-spacing: 1.25px;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`
