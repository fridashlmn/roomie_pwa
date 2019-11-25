import React, { useState } from 'react'
import styled from 'styled-components/macro'
import profileData from './profiles.json'
import Belongings from './Belongings'

export default function ProfileDetails() {
	const [profile, setProfile] = useState(profileData[0])
	return (
		<ProfileContainer>
			<img
				className="profile__avatar"
				src={require(`${profile.avatar}`)}
				alt=""
			/>
			<ProfileName>
				{profile.firstName} {profile.lastName}
			</ProfileName>
			<HorizontalLine />
			<ProfileContentTitle>duration</ProfileContentTitle>
			<ProfileContent>
				{profile.durationStart} - {profile.durationEnd}
			</ProfileContent>
			<ProfileContentTitle>rent</ProfileContentTitle>
			<ProfileContent>{profile.rent}</ProfileContent>
			<ProfileContentTitle>deposit</ProfileContentTitle>
			<ProfileContent>{profile.deposit}</ProfileContent>
			<ProfileBelongingsTitle>belongings</ProfileBelongingsTitle>
			{profile.belongings.map(item => (
				<Belongings key={item} text={item} />
			))}
		</ProfileContainer>
	)
}

const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	margin: 25px;
	margin-top: 75px;
	padding: 20px;
	letter-spacing: 1.5px;
	box-shadow: 0 5px 5px 2px darkgrey;
	border-radius: 25px;
`

const ProfileName = styled.p`
	align-self: center;
	padding: 20px;
	font-size: 2rem;
	font-weight: bold;
`

const ProfileContentTitle = styled.p`
	padding-top: 20px;
	padding-left: 10px;
	font-weight: bold;
	text-align: left;
`

const ProfileContent = styled.p`
	padding: 10px 0 10px 20px;
	font-size: 20px;
	font-weight: 100;
`

const ProfileBelongingsTitle = styled.p`
	padding-top: 20px;
	padding-left: 10px;
	padding-bottom: 10px;
	font-weight: bold;
	text-align: left;
`

const HorizontalLine = styled.hr`
	align-self: center;
	background: linear-gradient(to right, #787ff6, #7bd5f5);
	width: 200px;
	border: 0;
	height: 1px;
`
