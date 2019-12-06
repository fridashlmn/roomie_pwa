//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components/macro'

//IMPORT COMPONENTS
import { Form, Label, Input } from '../../components/Forms'
import { Button } from '../../components/Buttons'

export default function ProfileForm() {
	const marginTop = '5px'

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
			<Input name="name" placeholder="jane doe" marginTop={marginTop}></Input>
			<Label>
				Add your <b>duration</b> in the flat
			</Label>
			<Input
				name="duration"
				placeholder="2019-12-01 - unlimited"
				marginTop={marginTop}
			></Input>
			<Label>
				Add your <b>rent</b>
			</Label>
			<Input name="rent" placeholder="450 €" marginTop={marginTop}></Input>
			<Label>
				Add your <b>deposit</b>
			</Label>
			<Input name="deposit" placeholder="600 €" marginTop={marginTop}></Input>
			<Label>
				Add <b>stuff</b> you bring to the flat
			</Label>
			<Input
				name="stuff"
				placeholder="kitchen: cutlery"
				marginTop={marginTop}
			></Input>
			<Button>ADD ME!</Button>
		</Form>
	)
}

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
