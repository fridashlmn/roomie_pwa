//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//IMPORT COMPONENTS
import { Container, TeaserContainer } from '../../components/Container'
import { Button } from '../../components/Buttons'

export default function ContractsTeaser({
	contractsData,
	handleClickContractForDetails
}) {
	const backgroundColor = '#1ca7ec'
	return (
		<Container marginTop="0">
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
				<Button>ADD A CONTRACT</Button>
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
	text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
		0px 1px 4px rgba(0, 0, 0, 0.12);
`

const TeaserText = styled.div`
	padding: 20px 20px;
	background: transparent;
	font-size: 18px;
	text-decoration: none;
	text-align: center;
	cursor: default;
`
