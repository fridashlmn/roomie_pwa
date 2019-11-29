import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navbar({ navIsOpen, toggleNavOpen }) {
	const classes = navIsOpen ? ' nav__bar--open ' : ''
	return (
		<NavBar className={classes}>
			<CloseIcon onClick={toggleNavOpen}>x</CloseIcon>
			<NavItem className="nav__item" to="/" onClick={toggleNavOpen}>
				DASHBOARD
			</NavItem>
			<NavItem className="nav__item" to="/flatmates" onClick={toggleNavOpen}>
				FLATMATES
			</NavItem>
			<NavItem className="nav__item" to="/socialwall" onClick={toggleNavOpen}>
				SOCIAL WALL
			</NavItem>
			<NavItem className="nav__item" to="/calender" onClick={toggleNavOpen}>
				CALENDER
			</NavItem>
			<NavItem className="nav__item" to="/inventory" onClick={toggleNavOpen}>
				INVENTORY
			</NavItem>
			<NavItem className="nav__item" to="/expenses" onClick={toggleNavOpen}>
				EXPENSES
			</NavItem>
			<NavItem className="nav__item" to="/contracts" onClick={toggleNavOpen}>
				CONTRACTS
			</NavItem>
			<NavItem className="nav__item" to="/settings" onClick={toggleNavOpen}>
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
`

const NavItem = styled(Link)`
	text-decoration: none;
	color: #fdfdfd;
	background: transparent;
	font-size: 20px;
	font-family: 'Roboto';
	padding: 20px;
	cursor: default;
`
