//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components/macro'

//IMPORT COMPONENTS
import { DashboardContainer } from '../../components/Container'

export default function Dashboard({ profile }) {
	return (
		<DashboardContainer>
			<Greeting>
				Hi {profile.firstName}, <br /> welcome back!
			</Greeting>
			<News margin={'-70px'}>
				There are new postings on the{' '}
				<b>
					<ALink href="/socialwall">social wall</ALink>
				</b>
				. Check it out!
			</News>
			<News margin={'0px'} marginTop={'90px'}>
				John added a new event to the{' '}
				<b>
					<ALink href="/calendar">calendar</ALink>
				</b>
				. Let's see!
			</News>
			<News margin={'20px'}>
				Next tuesday is your turn to clean the kitchen. Look at the{' '}
				<b>
					<ALink href="/calendar">cleaning plan</ALink>
				</b>
				!
			</News>
		</DashboardContainer>
	)
}

const Greeting = styled.p`
	margin-top: -650px;
	padding: 0 40px;
	position: absolute;
	background: transparent;
	color: #fdfdfd;
	font-size: 40px;
	line-height: 1.25;
`

const News = styled.div`
	align-self: center;
	width: 80vw;
	padding: 20px;
	margin: ${props => props.margin};
	margin-top: ${props => props.marginTop};
	border-radius: 25px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const ALink = styled.a`
	text-decoration: none;
`
