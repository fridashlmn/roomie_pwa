import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../styles/styles.scss'

export default function Navbar({ navIsOpen, toggleNavOpen }) {
	const classes = navIsOpen ? 'nav__bar nav__bar--open ' : 'nav__bar'
	return (
		<nav className={classes}>
			<CloseIcon onClick={toggleNavOpen}>x</CloseIcon>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				DASHBOARD
			</Link>
			<Link className="nav__item" to="/flatmates" onClick={toggleNavOpen}>
				FLATMATES
			</Link>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				SOCIAL
			</Link>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				CALENDER
			</Link>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				INVENTORY
			</Link>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				EXPENSES
			</Link>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				CONSTRACTS
			</Link>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				SETTINGS
			</Link>
		</nav>
	)
}

const CloseIcon = styled.div`
	margin: 0 20px 20px 20px;
	color: white;
	font-size: 48px;
	cursor: default;
`
