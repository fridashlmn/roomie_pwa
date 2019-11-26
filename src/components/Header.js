import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import '../styles/styles.scss'

export default function Header({ toggleNavOpen }) {
	return (
		<header className="appbar">
			<Toolbar className="toolbar">
				<MenuIcon fontSize="large" onClick={toggleNavOpen} />
				<h3 className="header__title">page title</h3>
				<img
					src={require('../images/Logo.png')}
					alt=""
					className="header__logoicon"
				/>
			</Toolbar>
		</header>
	)
}
