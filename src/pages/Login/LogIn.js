//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

//IMPORT COMPONENTS
import { LogInForm, Input } from '../../components/Forms'
import { Button } from '../../components/Buttons'

export default function LogIn() {
	const marginTop = '20px'
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
			<Logo src={require('../../images/Logo.svg')} alt="" />
			<Input
				placeholder="email"
				id="email"
				name="email"
				type="email"
				marginTop={marginTop}
			/>
			<Input
				placeholder="password"
				id="password"
				name="password"
				type="password"
				marginTop={marginTop}
			/>
			<Button type="submit">LOGIN</Button>
		</LogInForm>
	)
}

const Logo = styled.img`
	margin-bottom: 100px;
	width: 150px;
	background: transparent;
	color: #fdfdfd;
`
