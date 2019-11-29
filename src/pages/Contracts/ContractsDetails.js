import React from 'react'
import styled from 'styled-components'
import { ContainerBoxShadow } from '../../components/Container'

export default function ContractDetails({ contract }) {
	return (
		<>
			<Background>
				<br />
				<ContractContainer>
					title
					<Content>{contract.title}</Content>
				</ContractContainer>
				<ContractContainer>
					description
					<Content>{contract.description}</Content>
				</ContractContainer>
				<ContractContainer>
					price
					<Content>{contract.price}</Content>
				</ContractContainer>
				<ContractContainer>
					contract start
					<Content>{contract.start}</Content>
				</ContractContainer>
				<ContractContainer>
					notice
					<Content>{contract.notice}</Content>
				</ContractContainer>
				<ContractContainer>
					customer number
					<Content>{contract.customerNumber}</Content>
				</ContractContainer>
				<ContractContainer>
					customer name
					<Content>{contract.customerName}</Content>
				</ContractContainer>
				<ContractContainer>
					comment
					<Content>{contract.comment}</Content>
				</ContractContainer>
				<br />
			</Background>
		</>
	)
}

const Content = styled.p`
	font-weight: bold;
	margin-top: 10px;
`

const Background = styled.div`
	margin-top: -20px;
	background: linear-gradient(to bottom, #1ca7ec, #1f2f98);
`

const ContractContainer = styled(ContainerBoxShadow)`
	margin-top: 40px;
	border-radius: 10px;
	padding: 15px 35px;
`
