//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

//IMPORT COMPONENTS
import { AuthForm, Input } from '../../components/Forms'
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
			.then(res => {
				localStorage.setItem('IdToken', `Bearer ${res.data.token}`)
				window.location.href = `/`
			})
			.catch(err => {
				console.error(err)
			})
	}

	return (
		<AuthForm onSubmit={handleSubmit}>
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
			<SignUpLink>
				Don't have an account yet? Sign up{' '}
				<Link
					style={{ background: 'transparent', cursor: 'default' }}
					to="/signup"
				>
					here
				</Link>
				!
			</SignUpLink>
		</AuthForm>
	)
}

const Logo = styled.img`
	margin-bottom: 100px;
	width: 150px;
	background: transparent;
	color: #fdfdfd;
`

const SignUpLink = styled.div`
	font-size: 12px;
	background: transparent;
`
