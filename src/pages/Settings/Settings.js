//IMPORT FUNCTIONALITY
import React, { useState } from 'react'
import styled from 'styled-components'

//IMPORT COMPONENTS
import { Container } from '../../components/Container'
import { Button } from '../../components/Buttons'

export default function Settings() {
	const [darkModeIsOn, setDarkModeIsOn] = useState(false)
	const [notificationsIsOn, setNotificationsIsOn] = useState(false)
	const [languageIsOn, setLanguageIsOn] = useState(false)
	const [mobileDataIsOn, setMobileDataIsOn] = useState(false)

	function handleDarkModeToggle() {
		setDarkModeIsOn(!darkModeIsOn)
	}
	function handleNotificationsToggle() {
		setNotificationsIsOn(!notificationsIsOn)
	}
	function handleLanguageToggle() {
		setLanguageIsOn(!languageIsOn)
	}
	function handleMobileDataToggle() {
		setMobileDataIsOn(!mobileDataIsOn)
	}
	function sendMail() {
		window.location.href = 'mailto:friederike.suhlmann@gmail.com'
	}

	return (
		<Container marginTop="10px">
			<Title>Dark Mode</Title>
			<ToggleContainer
				className={darkModeIsOn ? 'isActive' : ''}
				onClick={() => handleDarkModeToggle()}
			>
				<ToggleKnob
					className={darkModeIsOn ? 'isActive' : ''}
					onClick={() => handleDarkModeToggle()}
				/>
			</ToggleContainer>
			<Title>Notifications</Title>
			<ToggleContainer
				className={notificationsIsOn ? 'isActive' : ''}
				onClick={() => handleNotificationsToggle()}
			>
				<ToggleKnob
					className={notificationsIsOn ? 'isActive' : ''}
					onClick={() => handleNotificationsToggle()}
				/>
			</ToggleContainer>
			<Title>English | German</Title>
			<ToggleContainer
				className={languageIsOn ? 'isActive' : ''}
				onClick={() => handleLanguageToggle()}
			>
				<ToggleKnob
					className={languageIsOn ? 'isActive' : ''}
					onClick={() => handleLanguageToggle()}
				/>
			</ToggleContainer>
			<Title>Mobile Data</Title>
			<ToggleContainer
				className={mobileDataIsOn ? 'isActive' : ''}
				onClick={() => handleMobileDataToggle()}
			>
				<ToggleKnob
					className={mobileDataIsOn ? 'isActive' : ''}
					onClick={() => handleMobileDataToggle()}
				/>
			</ToggleContainer>
			<Button marginTop="75px" fontSize="20px" onClick={() => sendMail()}>
				SEND FEEDBACK
			</Button>
			<SubTitle>coyright by Friederike Suhlmann</SubTitle>
		</Container>
	)
}

const Title = styled.p`
	padding: 30px 0 20px 0;
	font-size: 14px;
	font-weight: 400;
`

const SubTitle = styled.p`
	margin-top: 20px;
	font-size: 8px;
`

const ToggleContainer = styled.div`
	width: 125px;
	height: 20px;
	border-radius: 30px;
	outline: none;
	background: #ddd;
	position: relative;
	cursor: default;
	transition: all 0.3s ease-in;
	&.isActive {
		background: #787ff6;
	}
`

const ToggleKnob = styled.button`
	width: 40px;
	height: 40px;
	top: -10px;
	border: none;
	outline: none;
	position: absolute;
	background: #fdfdfd;
	border-radius: 50%;
	line-height: 35px;
	transition: all 0.1s ease-in;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	&.isActive {
		transform: translateX(90px);
		background: #787ff6;
	}
`
