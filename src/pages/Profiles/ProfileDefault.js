import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Container } from '../../components/Container'
import { Button } from '../../components/Buttons'

export default function ProfileDefault() {
	return (
		<Container>
			<DefaultImage src={require('../../images/profile_default.png')} alt="" />
			<DefaultText>
				oh no! <br />
				looks like you haven't added a roomie yet!
			</DefaultText>

			<Link to="/newroomie" className="teaser__link">
				<Button>ADD A ROOMIE</Button>
			</Link>
		</Container>
	)
}

const DefaultImage = styled.img`
	align-self: center;
	margin-top: 20px;
	width: 250px;
	height: 250px;
	object-fit: cover;
`

const DefaultText = styled.p`
	width: 300px;
	padding: 20px 50px;
	font-size: 12px;
	color: #111;
	text-align: center;
`
