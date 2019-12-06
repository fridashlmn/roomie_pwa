//IMPORT FUNCTIONALITY
import React from 'react'

//IMPORT COMPONENTS
import { Form, Label, Input } from '../../components/Forms'
import { Button } from '../../components/Buttons'

export default function ContractForm() {
	const marginTop = '5px'

	return (
		<Form>
			<Label>
				Add the <b>title</b>
			</Label>
			<Input name="title" placeholder="vodafone" marginTop={marginTop}></Input>
			<Label>
				Add the <b>description</b>
			</Label>
			<Input
				name="description"
				placeholder="internet provider"
				marginTop={marginTop}
			></Input>
			<Label>
				Add the <b>price</b>
			</Label>
			<Input
				name="price"
				placeholder="20 €/month"
				marginTop={marginTop}
			></Input>
			<Label>
				Add the <b>start date</b>
			</Label>
			<Input
				name="start"
				placeholder="01.12.2019"
				marginTop={marginTop}
			></Input>
			<Label>
				Add the <b>notice period</b>
			</Label>
			<Input name="notice" placeholder="3 month" marginTop={marginTop}></Input>
			<Label>
				Add the <b>customer number</b>
			</Label>
			<Input
				name="customerNumber"
				placeholder="1234987"
				marginTop={marginTop}
			></Input>
			<Label>
				Add the <b>customer name</b>
			</Label>
			<Input
				name="customerName"
				placeholder="Malina Stark"
				marginTop={marginTop}
			></Input>
			<Label>
				Add <b>comments</b>
			</Label>
			<Input
				name="comments"
				placeholder="lorem ipsum"
				marginTop={marginTop}
			></Input>
			<Button>ADD CONTRACT!</Button>
		</Form>
	)
}
