import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, TeaserSection } from '../../components/ContainerStyled'

export default function ContractsTeaser({
	contractsData,
	handleClickContractforDetails
}) {
	const backgroundColor = 'linear-gradient(to right, #787ff6, #4adede);'
	return (
		<Container>
			{contractsData.map((contract, index) => (
				<LinkStyled
					to={`/${contract.title}`}
					onClick={() => handleClickContractforDetails(index)}
				>
					<TeaserSection width="325px" background={backgroundColor}>
						<TeaserTitle>{contract.title}</TeaserTitle>
						<TeaserText>{contract.description}</TeaserText>
					</TeaserSection>
				</LinkStyled>
			))}
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
