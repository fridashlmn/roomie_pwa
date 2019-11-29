import React from 'react'
import styled from 'styled-components'
import { ContractContainer } from '../../components/ContainerStyled'

export default function ContractDetails({ contract }) {
	return (
		<>
			<Background>
				<br />
				<ContractContainer marginTop="40px">
					<Title>title</Title>
					{contract.title}
				</ContractContainer>
				<ContractContainer>
					<Title>description</Title>
					{contract.description}
				</ContractContainer>
				<ContractContainer>
					<Title>price</Title>
					{contract.price}
				</ContractContainer>
				<ContractContainer>
					<Title>contract start</Title>
					{contract.start}
				</ContractContainer>
				<ContractContainer>
					<Title>notice</Title>
					{contract.notice}
				</ContractContainer>
				<ContractContainer>
					<Title>customer number</Title>
					{contract.customerNumber}
				</ContractContainer>
				<ContractContainer>
					<Title>customer name</Title>
					{contract.customerName}
				</ContractContainer>
				<ContractContainer>
					<Title>comment</Title>
					{contract.comment}
				</ContractContainer>
				<br />
			</Background>
		</>
	)
}

const Title = styled.p`
	font-weight: bold;
	padding: 5px;
`

const Background = styled.div`
	margin-top: -20px;
	background: linear-gradient(to bottom, #1ca7ec, #1f2f98);
`
