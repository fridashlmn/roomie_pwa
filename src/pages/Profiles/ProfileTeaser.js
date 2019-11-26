import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProfileTeaserContainer } from '../../components/ContainerStyled'

export default function ProfileTeaser({
	profileData,
	handleClickUserforDetails
}) {
	return (
		<ProfileTeaserContainer>
			{profileData.map((profile, index) => (
				<Link
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
				</Link>
			))}
		</ProfileTeaserContainer>
	)
}

const TeaserSection = styled.div`
	width: 300px;
	background-color: white;
	border-radius: 25px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	margin-bottom: 25px;
`

const TeaserTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	padding-top: 10px;
`

const TeaserText = styled.div`
	text-decoration: none;
	cursor: default;
	text-align: center;
	padding: 10px 20px;
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
