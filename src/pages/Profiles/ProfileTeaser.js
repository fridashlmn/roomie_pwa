import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Container } from '../../components/ContainerStyled'
import { AddRoomieButton } from '../../components/Buttons'

export default function ProfileTeaser({
	profileData,
	handleClickUserforDetails
}) {
	return (
		<Container>
			{profileData.map((profile, index) => (
				<LinkStyled
					to={`/${profile.firstName}`}
					onClick={() => handleClickUserforDetails(index)}
					handle={profile.firstName}
					className="teaser__link"
				>
					<TeaserSection>
						<TeaserImage src={require(`${profile.avatar}`)} alt="" />
						<TeaserTitle>
							{profile.firstName} {profile.lastName}
						</TeaserTitle>
						<TeaserText>
							{profile.durationStart} - {profile.durationEnd}
						</TeaserText>
					</TeaserSection>
				</LinkStyled>
			))}
			<Link to="/newroomie" className="teaser__link">
				<AddRoomieButton>ADD A ROOMIE</AddRoomieButton>
			</Link>
		</Container>
	)
}

const TeaserSection = styled.div`
	width: 300px;
	margin-bottom: 25px;
	background: #fdfdfd;
	border-radius: 25px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

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
