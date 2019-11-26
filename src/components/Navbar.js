import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import '../styles/styles.scss'

export default function Navbar({ isOpen, toggleNavOpen }) {
	const classes = isOpen ? 'nav__bar nav__bar--open ' : 'nav__bar'
	return (
		<nav className={classes}>
			<div className="closeicon" onClick={toggleNavOpen}>
				x
			</div>
			<Link className="nav__item" to="/" onClick={toggleNavOpen}>
				DASHBOARD
			</Link>
			<Link className="nav__item" to="/profile" onClick={toggleNavOpen}>
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
