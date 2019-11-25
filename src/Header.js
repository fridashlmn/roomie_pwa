import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import './styles.scss'

export default function Header() {
	return (
		<div>
			<AppBar position="static">
				<Toolbar className="header">
					<MenuIcon fontSize="large" />
					<h3 className="header__title">page title</h3>
					<img
						src={require('./images/Logo.png')}
						className="header__logoicon"
					/>
				</Toolbar>
			</AppBar>
		</div>
	)
}
