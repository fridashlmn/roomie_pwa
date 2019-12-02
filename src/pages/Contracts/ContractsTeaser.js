import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, TeaserContainer } from '../../components/Container'
import { Button } from '../../components/Buttons'

export default function ContractsTeaser({
	contractsData,
	handleClickContractForDetails
}) {
	const backgroundColor = 'linear-gradient(to right, #787ff6, #4adede);'
	return (
		<Container>
			{contractsData.map((contract, index) => (
				<LinkStyled
					to={`/${contract.title}`}
					onClick={() => handleClickContractForDetails(index)}
				>
					<TeaserContainer width="325px" background={backgroundColor}>
						<TeaserTitle>{contract.title}</TeaserTitle>
						<TeaserText>{contract.description}</TeaserText>
					</TeaserContainer>
				</LinkStyled>
			))}
			<Link to="/newcontract">
				<Button>ADD A CONTRACT!</Button>
			</Link>
		</Container>
	)
}

const LinkStyled = styled(Link)`
	text-decoration: none;
	cursor: default;
	color: #222;
`

const TeaserTitle = styled.div`
	background: transparent;
	padding-top: 20px;
	color: #fdfdfd;
	font-size: 28px;
	font-weight: bold;
	text-align: center;
`

const TeaserText = styled.div`
	padding: 20px 20px;
	background: transparent;
	font-size: 18px;
	text-decoration: none;
	text-align: center;
	cursor: default;
`
