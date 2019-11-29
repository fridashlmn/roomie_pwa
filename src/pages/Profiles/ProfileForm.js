import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '../../components/Buttons'
import { Form } from '../../components/Container'

export default function ProfileForm() {
	return (
		<Form>
			<ImageAddProfile>
				<IconAddProfile
					src={require('../../images/icon_add_profile.png')}
					alt=""
				/>
			</ImageAddProfile>
			<Label>
				Add your <b>name</b>
			</Label>
			<Input name="name" placeholder="jane doe"></Input>
			<Label>
				Add your <b>duration</b> in the flat
			</Label>
			<Input name="duration" placeholder="2019-12-01 - unlimited"></Input>
			<Label>
				Add your <b>rent</b>
			</Label>
			<Input name="rent" placeholder="450 €"></Input>
			<Label>
				Add your <b>deposit</b>
			</Label>
			<Input name="deposit" placeholder="600 €"></Input>
			<Label>
				Add <b>stuff</b> you bring to the flat
			</Label>
			<Input name="stuff" placeholder="kitchen: cutlery"></Input>
			<Button>ADD ME!</Button>
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
