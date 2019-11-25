import React from 'react'
import styled from 'styled-components/macro'

const BelongingsList = styled.span`
	display: inline;
	margin: 5px 20px;
	padding: 7.5px 25px;
	background: linear-gradient(10deg, #787ff6, #7bd5f5);
	font-weight: bold;
	font-size: 12px;
	color: white;
	border-radius: 12px;
	box-shadow: 0 1px 1px 0.5px darkgrey;
`

export default function Belongings({ text }) {
	return <BelongingsList>{text}</BelongingsList>
}
