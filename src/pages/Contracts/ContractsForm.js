import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '../../components/Buttons'
import { Form } from '../../components/Container'

export default function ContractForm() {
	return (
		<Form>
			<Label>
				Add the <b>title</b>
			</Label>
			<Input name="title" placeholder="vodafone"></Input>
			<Label>
				Add the <b>description</b>
			</Label>
			<Input name="description" placeholder="internet provider"></Input>
			<Label>
				Add the <b>price</b>
			</Label>
			<Input name="price" placeholder="20 €/month"></Input>
			<Label>
				Add the <b>start date</b>
			</Label>
			<Input name="start" placeholder="01.12.2019"></Input>
			<Label>
				Add the <b>notice period</b>
			</Label>
			<Input name="notice" placeholder="3 month"></Input>
			<Label>
				Add the <b>customer number</b>
			</Label>
			<Input name="customerNumber" placeholder="1234987"></Input>
			<Label>
				Add the <b>customer name</b>
			</Label>
			<Input name="customerName" placeholder="Malina Stark"></Input>
			<Label>
				Add <b>comments</b>
			</Label>
			<Input name="comments" placeholder="lorem ipsum"></Input>
			<Button>ADD CONTRACT!</Button>
		</Form>
	)
}

const Label = styled.label`
	margin-top: 20px;
	padding-left: 10px;
`

const Input = styled.input`
	padding: 15px;
	margin-top: 5px;
	border: 1px solid #444;
	border-radius: 0;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	font-size: 16px;
`
