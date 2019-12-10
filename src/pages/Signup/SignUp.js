//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

//IMPORT COMPONENTS
import { AuthForm, Input } from '../../components/Forms'
import { Button } from '../../components/Buttons'

export default function SignUp() {
	const marginTop = '20px'

	function handleSubmit(event) {
		event.preventDefault()
		const form = event.target
		const formData = new FormData(form)
		const newUserData = Object.fromEntries(formData)
		axios
			.post('/signup', newUserData)
			.then(res => {
				localStorage.setItem('IdToken', `Bearer ${res.data.token}`)
				window.location.href = `/login`
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
			<Input
				placeholder="confirm password"
				id="confirmPassword"
				name="confirmPassword"
				type="password"
				marginTop={marginTop}
			/>
			<Input
				placeholder="user name"
				id="handle"
				name="handle"
				type="text"
				marginTop={marginTop}
			/>
			<Button type="submit">SIGN UP</Button>
			<SignUpLink>
				Already have an account? Log in{' '}
				<Link
					style={{ background: 'transparent', cursor: 'default' }}
					to="/login"
				>
					here
				</Link>
				!
			</SignUpLink>
		</AuthForm>
	)
}

const Logo = styled.img`
	margin-bottom: 50px;
	width: 100px;
	background: transparent;
	color: #fdfdfd;
`

const SignUpLink = styled.div`
	font-size: 12px;
	background: transparent;
`
