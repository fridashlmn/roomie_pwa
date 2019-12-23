import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navbar({ navIsOpen, toggleNavOpen }) {
	const classes = navIsOpen ? ' nav__bar--open ' : ''
	const { pathname } = useLocation()
	let fontWeightD,
		fontWeightF,
		fontWeightS,
		fontWeightC,
		fontWeightI,
		fontWeightE,
		fontWeightCo,
		fontWeightSe
	switch (pathname) {
		case '/':
			fontWeightD = '700'
			break
		case '/flatmates':
			fontWeightF = '700'
			break
		case '/socialwall':
			fontWeightS = '700'
			break
		case '/calender':
			fontWeightC = '700'
			break
		case '/inventory':
			fontWeightI = '700'
			break
		case '/expenses':
			fontWeightE = '700'
			break
		case '/contracts':
			fontWeightCo = '700'
			break
		case '/settings':
			fontWeightSe = '700'
			break
		default:
			fontWeightD = ''
	}
	return (
		<NavBar className={classes}>
			<CloseIcon onClick={toggleNavOpen}>&times;</CloseIcon>
			<NavItem fontWeight={fontWeightD} to="/" onClick={toggleNavOpen}>
				DASHBOARD
			</NavItem>
			<NavItem fontWeight={fontWeightF} to="/flatmates" onClick={toggleNavOpen}>
				FLATMATES
			</NavItem>
			<NavItem
				fontWeight={fontWeightS}
				to="/socialwall"
				onClick={toggleNavOpen}
			>
				SOCIAL WALL
			</NavItem>
			<NavItem fontWeight={fontWeightC} to="/calender" onClick={toggleNavOpen}>
				CALENDER
			</NavItem>
			<NavItem fontWeight={fontWeightI} to="/inventory" onClick={toggleNavOpen}>
				INVENTORY
			</NavItem>
			<NavItem fontWeight={fontWeightE} to="/expenses" onClick={toggleNavOpen}>
				EXPENSES
			</NavItem>
			<NavItem
				fontWeight={fontWeightCo}
				to="/contracts"
				onClick={toggleNavOpen}
			>
				CONTRACTS
			</NavItem>
			<NavItem fontWeight={fontWeightSe} to="/settings" onClick={toggleNavOpen}>
				SETTINGS
			</NavItem>
		</NavBar>
	)
}

const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	position: fixed;
	left: -100%;
	z-index: 3;
	background: linear-gradient(to bottom, #1f2f98, #1ca7ec);
	transition: 0.5s;

	&.nav__bar--open {
		left: 0;
	}
`

const CloseIcon = styled.div`
	margin: 0 20px 20px 20px;
	background: transparent;
	color: #fdfdfd;
	font-size: 48px;
	cursor: default;
	transition-duration: 0.25s;
	&:active {
		font-size: 52px;
	}
`

const NavItem = styled(Link)`
	text-decoration: none;
	color: #fdfdfd;
	background: transparent;
	font-size: 20px;
	font-family: 'Roboto';
	font-weight: ${props => props.fontWeight || '300'};
	padding: 20px;
	cursor: default;
`
