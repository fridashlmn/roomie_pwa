//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

//IMPORT COMPONENTS
import { Container, TeaserContainer } from '../../components/Container'
import { Button } from '../../components/Buttons'

export default function ProfileTeaser({
	profileData,
	handleClickUserForDetails
}) {
	return (
		<Container>
			{profileData.map((profile, index) => (
				<LinkStyled
					to={`/${profile.firstName}`}
					onClick={() => handleClickUserForDetails(index)}
				>
					<TeaserContainer>
						<TeaserImage src={profile.imageUrl} alt="" />
						<TeaserTitle>
							{profile.firstName} {profile.lastName}
						</TeaserTitle>
						<TeaserText>
							{profile.durationStart} - {profile.durationEnd}
						</TeaserText>
					</TeaserContainer>
				</LinkStyled>
			))}
			<Link to="/newroomie">
				<Button>ADD A ROOMIE</Button>
			</Link>
		</Container>
	)
}

const TeaserTitle = styled.div`
	padding-top: 10px;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
`

const TeaserText = styled.div`
	padding: 10px 20px;
	background: transparent;
	text-decoration: none;
	text-align: center;
	cursor: default;
`

const TeaserImage = styled.img`
	margin: 0;
	padding: 0;
	align-self: center;
	width: 300px;
	height: 200px;
	object-fit: cover;
	border-radius: 25px 25px 0 0;
	filter: opacity(60%);
	filter: brightness(50%);
`

const LinkStyled = styled(Link)`
	text-decoration: none;
	cursor: default;
	color: #222;
`
