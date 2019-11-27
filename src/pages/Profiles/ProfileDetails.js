import React from 'react'
import styled from 'styled-components/macro'
import Belongings from './Belongings'
import { ProfileContainer } from '../../components/ContainerStyled'

export default function ProfileDetails({ profile }) {
	return (
		<ProfileContainer>
			<ProfileAvatar src={require(`${profile.avatar}`)} alt="" />
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

const ProfileName = styled.p`
	align-self: center;
	padding: 20px;
	font-size: 2rem;
	font-weight: bold;
`

const ProfileAvatar = styled.img`
	align-self: center;
	margin-top: 20px;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	box-shadow: 0px 1px 3px 0px darkgrey;
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
