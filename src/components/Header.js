import React from 'react'
import styled from 'styled-components/macro'
import { useLocation } from 'react-router-dom'

export default function Header({ toggleNavOpen }) {
	let height = '68px'
	let pagename
	let visibility = 'visible'
	const { pathname } = useLocation()

	switch (pathname) {
		case '/login':
			pagename = 'login'
			height = '0'
			visibility = 'hidden'
			break
		case '/signup':
			pagename = 'signup'
			height = '0'
			visibility = 'hidden'
			break
		case '/':
			height = '100vh'
			pagename = 'dashboard'
			break
		case '/flatmates':
			pagename = 'flatmates'
			break
		case '/socialwall':
			pagename = 'social wall'
			break
		case '/calender':
			pagename = 'calender'
			break
		case '/inventory':
			pagename = 'inventory'
			break
		case '/expenses':
			pagename = 'expenses'
			break
		case '/contracts':
			pagename = 'contracts'
			break
		case '/settings':
			pagename = 'settings'
			break
		default:
			pagename = ''
	}

	return (
		<Appbar visibility={visibility}>
			<Toolbar propHeight={height}>
				<MenuIcon
					onClick={toggleNavOpen}
					src={require('../images/icon_menu.png')}
					alt=""
				/>
				<HeaderTitle>{pagename}</HeaderTitle>
				<LogoIcon src={require('../images/Logo.png')} alt="" />
			</Toolbar>
		</Appbar>
	)
}

const Appbar = styled.div`
	position: sticky;
	visibility: ${props => props.visibility};
	top: 0;
	left: auto;
	right: 0;
	z-index: 1;
`

const Toolbar = styled.div`
	display: flex;
	position: relative;
	align-items: flex-start;
	height: ${props => props.propHeight};
	width: 100vw;
	padding-left: 24px;
	padding-right: 24px;
	background: linear-gradient(to bottom, #1f2f98, #1ca7ec);
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const HeaderTitle = styled.h4`
	padding: 25px 25px;
	background: transparent;
	color: #fdfdfd;
	letter-spacing: 0.12em;
	font-size: 18px;
`

const LogoIcon = styled.img`
	padding-top: 15px;
	right: 0;
	width: 30px;
	margin: 0 0 0 auto;
	background: transparent;
	color: #fdfdfd;
`

const MenuIcon = styled.img`
	padding-top: 20px;
	background: transparent;
	width: 30px;
	cursor: default;
`
