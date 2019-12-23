//IMPORT FUNCTIONALITY
import React, { useState } from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

//IMPORT COMPONENTS
import { AuthForm, Input } from '../../components/Forms'
import { Button } from '../../components/Buttons'

export default function LogIn() {
	const marginTop = '20px'
	const [errors, setErrors] = useState('')
	const [loading, setLoading] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		const form = event.target
		const formData = new FormData(form)
		const userData = Object.fromEntries(formData)
		axios
			.post('/login', userData)
			.then(res => {
				setLoading(true)
				localStorage.setItem('IdToken', `Bearer ${res.data.token}`)
				window.location.href = `/`
			})
			.catch(() => {
				setErrors('Wrong credentials, please try again')
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
			<ErrorMessage>{errors}</ErrorMessage>
			<Button type="submit">
				LOGIN
				{/* {loading && } */}
			</Button>
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

const ErrorMessage = styled.span`
	background: transparent;
	color: #d8000c;
	font-size: 12px;
	padding-top: 5px;
`
