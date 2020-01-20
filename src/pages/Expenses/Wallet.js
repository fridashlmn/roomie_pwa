import React from 'react'
import styled from 'styled-components/macro'
import { Container } from '../../components/Container'
import { AddItemButton } from '../../components/Buttons'

export default function Wallet({ profileData }) {
	return (
		<Container>
			{profileData.map((profile, index) => (
				<Grid>
					<Avatar src={profile.imageUrl} alt="" />
					<Name>
						{profile.firstName} {profile.lastName}
					</Name>
					<Money>{profile.wallet}</Money>
				</Grid>
			))}
			<AddItemButton>&#36;</AddItemButton>
		</Container>
	)
}

const Avatar = styled.img`
	grid-area: avatar;
	place-self: center;
	margin: 10px;
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
`

const Name = styled.div`
	grid-area: name;
`
const Money = styled.div`
	grid-area: money;
	font-weight: 800;
`

const Grid = styled.div`
	display: grid;
	padding: 15px;
	margin: 10px;
	margin-bottom: 50px;
	border-radius: 25px;
	box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	grid-gap: 5px;
	grid-template-columns: 0.5fr 0.5fr 1fr 2fr;
	grid-template-rows: auto;
	grid-template-areas:
		'avatar . name name'
		'avatar . money money';
`
