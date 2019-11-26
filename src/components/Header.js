import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

export default function Header({ toggleNavOpen }) {
	return (
		<Appbar>
			<Toolbar>
				<MenuIcon fontSize="large" onClick={toggleNavOpen} />
				<HeaderTitle>page title</HeaderTitle>
				<LogoIcon src={require('../images/Logo.png')} alt="" />
			</Toolbar>
		</Appbar>
	)
}

const Appbar = styled.header`
	width: 100%;
	display: flex;
	box-sizing: border-box;
	flex-shrink: 0;
	flex-direction: column;
	z-index: 1;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	top: 0;
	left: auto;
	right: 0;
	position: sticky;
`

const Toolbar = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	width: 100vw;
	padding: 5px;
	background: linear-gradient(to bottom, #1f2f98, #1ca7ec);
	min-height: 56px;
	padding-left: 16px;
	padding-right: 16px;
`

const HeaderTitle = styled.h3`
	padding: 0 20px;
	color: white;
`

const LogoIcon = styled.img`
	right: 0;
	margin: 0 0 0 auto;
	width: 30px;
	color: white;
`
