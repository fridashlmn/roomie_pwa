import React from 'react'
import styled from 'styled-components/macro'
import ProfileBelongings from './ProfileBelongings'
import { ContainerBoxShadow } from '../../components/Container'

export default function ProfileDetails({ profile }) {
	return (
		<ContainerBoxShadow marginTop="50px" borderRadius="25px" padding="20px">
			<Avatar src={require(`${profile.avatar}`)} alt="" />
			<Name>
				{profile.firstName} {profile.lastName}
			</Name>
			<HorizontalLine />
			<ContentTitle>duration</ContentTitle>
			<Content>
				{profile.durationStart} - {profile.durationEnd}
			</Content>
			<ContentTitle>rent</ContentTitle>
			<Content>{profile.rent}</Content>
			<ContentTitle>deposit</ContentTitle>
			<Content>{profile.deposit}</Content>
			<BelongingsTitle>belongings</BelongingsTitle>
			{profile.belongings.map(item => (
				<ProfileBelongings key={item} text={item} />
			))}
		</ContainerBoxShadow>
	)
}

const Avatar = styled.img`
	align-self: center;
	margin-top: 20px;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const Name = styled.p`
	align-self: center;
	padding: 20px;
	font-size: 2rem;
	font-weight: bold;
`

const ContentTitle = styled.p`
	padding-top: 20px;
	padding-left: 10px;
	font-weight: bold;
	text-align: left;
`

const Content = styled.p`
	padding: 10px 0 10px 20px;
	font-size: 20px;
	font-weight: 100;
`

const BelongingsTitle = styled.p`
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
