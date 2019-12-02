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
			<Input name="comments" placeholder="lore ipsum"></Input>
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

const ImageAddProfile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 150px;
	margin-bottom: 30px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	border-radius: 50%;
`

const IconAddProfile = styled.img`
	left: 100px;
	width: 50px;
	height: 50px;
	background: transparent;
	object-fit: cover;
`

/*
Add name to inputs!
*/
