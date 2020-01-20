import React from 'react'
import styled from 'styled-components/macro'
import { Container } from '../../components/Container'
import { AddItemButton } from '../../components/Buttons'

export default function CleaningPlan({ allProfiles }) {
	return (
		<Container>
			<Title>cleaning plan</Title>
			<Grid>
				<Date>this week:</Date>
				<Avatar src={allProfiles[0].imageUrl} alt="" />
				<Name>
					{allProfiles[0].firstName} {allProfiles[0].lastName}
				</Name>
				<Task>kitchen & bathroom</Task>
			</Grid>
			<Grid>
				<Date>this week:</Date>
				<Avatar src={allProfiles[1].imageUrl} alt="" />
				<Name>
					{allProfiles[1].firstName} {allProfiles[1].lastName}
				</Name>
				<Task>trash & recycling</Task>
			</Grid>
			<Grid>
				<Date>next week:</Date>
				<Avatar src={allProfiles[1].imageUrl} alt="" />
				<Name>
					{allProfiles[1].firstName} {allProfiles[1].lastName}
				</Name>
				<Task>kitchen & bathroom</Task>
			</Grid>
			<Grid>
				<Date>next week:</Date>
				<Avatar src={allProfiles[2].imageUrl} alt="" />
				<Name>
					{allProfiles[2].firstName} {allProfiles[2].lastName}
				</Name>
				<Task>trash & recycling</Task>
			</Grid>
			<AddItemButton>&#36;</AddItemButton>
		</Container>
	)
}

const Title = styled.h1`
	margin-bottom: 20px;
`

const Date = styled.div`
	grid-area: date;
`

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
const Task = styled.div`
	grid-area: task;
	font-weight: 800;
`

const Grid = styled.div`
	display: grid;
	padding: 15px;
	margin: 10px;
	margin-bottom: 25px;
	border-radius: 25px;
	box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	grid-gap: 5px;
	grid-template-columns: 0.5fr 0.5fr 1fr 2fr;
	grid-template-rows: auto;
	grid-template-areas:
		' date date . .'
		'avatar . name name'
		'avatar . task task';
`
