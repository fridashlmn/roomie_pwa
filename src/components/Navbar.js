import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import '../styles/styles.scss'

export default function Navbar({ navIsOpen, toggleNavOpen }) {
	const classes = navIsOpen ? 'nav__bar nav__bar--open ' : 'nav__bar'
	return (
		<nav className={classes}>
			<CloseIcon onClick={toggleNavOpen}>x</CloseIcon>
			<NavItem className="nav__item" to="/" onClick={toggleNavOpen}>
				DASHBOARD
			</NavItem>
			<NavItem className="nav__item" to="/flatmates" onClick={toggleNavOpen}>
				FLATMATES
			</NavItem>
			<NavItem className="nav__item" to="/" onClick={toggleNavOpen}>
				SOCIAL
			</NavItem>
			<NavItem className="nav__item" to="/" onClick={toggleNavOpen}>
				CALENDER
			</NavItem>
			<NavItem className="nav__item" to="/" onClick={toggleNavOpen}>
				INVENTORY
			</NavItem>
			<NavItem className="nav__item" to="/" onClick={toggleNavOpen}>
				EXPENSES
			</NavItem>
			<NavItem className="nav__item" to="/contracts" onClick={toggleNavOpen}>
				CONTRACTS
			</NavItem>
			<NavItem className="nav__item" to="/" onClick={toggleNavOpen}>
				SETTINGS
			</NavItem>
		</nav>
	)
}

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
