import React from 'react'
import styled from 'styled-components/macro'
import { DashboardContainer } from '../../components/ContainerStyled'
import '../../styles/styles.scss'

export default function Dashboard({ profile }) {
	return (
		<>
			<DashboardContainer>
				<Greeting>
					Hi {profile.firstName}, <br /> welcome back!
				</Greeting>
				<News margin={'-70px'}>
					Here is a placeholder for upcoming stuff. Perhaps a{' '}
					<u>notification</u> that someone posted in the chat.
					<br />
					<ALink href="/flatmates">Go there</ALink>
				</News>
				<News margin={'0px'} marginTop={'90px'}>
					Here is another section for <u>persona-lised notifications</u>.
					<br />
					<ALink href="/flatmates">Go there</ALink>
				</News>
				<News margin={'20px'}>
					...and maybe <u>another one</u>?
					<br />
					<ALink href="/flatmates">Go there</ALink>
				</News>
			</DashboardContainer>
		</>
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
	padding-left: 5px;
	text-decoration: none;
	font-weight: bold;
	font-size: 12px;
	background: -webkit-linear-gradient(#787ff6, #4adede);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`
