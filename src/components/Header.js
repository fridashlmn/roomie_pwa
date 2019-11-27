import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ toggleNavOpen }) {
	return (
		<Appbar>
			<Toolbar>
				<MenuIcon
					onClick={toggleNavOpen}
					src={require('../images/icon_menu.png')}
					alt=""
				/>
				<HeaderTitle>page title</HeaderTitle>
				<LogoIcon src={require('../images/Logo.png')} alt="" />
			</Toolbar>
		</Appbar>
	)
}

const Appbar = styled.header`
	position: sticky;
	top: 0;
	left: auto;
	right: 0;
	z-index: 1;
`

const Toolbar = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	min-height: 68px;
	width: 100vw;
	padding-left: 24px;
	padding-right: 24px;
	background: linear-gradient(to bottom, #1f2f98, #1ca7ec);
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const HeaderTitle = styled.h3`
	padding: 0 20px;
	background: transparent;
	color: #fdfdfd;
`

const LogoIcon = styled.img`
	right: 0;
	width: 30px;
	margin: 0 0 0 auto;
	background: transparent;
	color: #fdfdfd;
`

const MenuIcon = styled.img`
	background: transparent;
	width: 30px;
	cursor: default;
`
