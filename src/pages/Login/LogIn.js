import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Buttons'
import axios from 'axios'

export default function LogIn() {
	function handleSubmit(event) {
		event.preventDefault()
		const form = event.target
		const formData = new FormData(form)
		const userData = Object.fromEntries(formData)
		axios
			.post('/login', userData)
			.then(() => {
				window.location.href = `/`
			})
			.catch(err => {
				console.error(err)
			})
	}

	return (
		<LogInForm onSubmit={handleSubmit}>
			<Logo src={require('./Logo.svg')} alt="" />
			<Input placeholder="email" id="email" name="email" type="email" />
			<Input
				placeholder="password"
				id="password"
				name="password"
				type="password"
			/>
			<Button type="submit">LOGIN</Button>
		</LogInForm>
	)
}

const LogInForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	letter-spacing: 1.5px;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(to bottom, #1f2f98, #1ca7ec);
`

const Logo = styled.img`
	margin-bottom: 100px;
	width: 150px;
	background: transparent;
	color: #fdfdfd;
`

const Input = styled.input`
	padding: 15px;
	margin-top: 20px;
	background: #fdfdfd;
	border: none;
	border-radius: 2px;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	font-size: 16px;
`
