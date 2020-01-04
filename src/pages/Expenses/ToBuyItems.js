import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import { Input } from '../../components/Forms'
export default function ToBuyItems({
	title,
	description,
	category,
	price,
	link
}) {
	const [checked, setIsChecked] = useState(false)
	function toggleChecked() {
		setIsChecked(!checked)
	}

	function alertPaymenet() {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<section className="custom-ui" style={{ margin: '30px' }}>
						<h1>Thanks!</h1>
						<Message>How much did you pay for that?</Message>
						<Input placeholder="9,99€" />
						<HorizontalLine />
						<Buttons onClick={onClose}>Cancel</Buttons>
						<Buttons
							onClick={() => {
								this.handleClickDelete()
								onClose()
							}}
						>
							Bought it!
						</Buttons>
					</section>
				)
			}
		})
	}
	return (
		<Grid>
			<Title> {title}</Title>
			<Description> {description}</Description>
			<Category> {category}</Category>
			<Price> € = {price}</Price>
			{link ? <Link href={link}> > click for link</Link> : ''}
			<CheckboxContainer>
				<HiddenCheckbox checked={checked} />
				<StyledCheckbox
					checked={checked}
					onClick={() => toggleChecked()}
					// eslint-disable-next-line react/jsx-no-duplicate-props
					onClick={() => alertPaymenet()}
				></StyledCheckbox>
			</CheckboxContainer>
		</Grid>
	)
}

const Grid = styled.div`
	display: grid;
	padding: 15px;
	margin: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
	box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	grid-gap: 5px;
	grid-template-columns: 1.5fr 1fr 1.25fr 0.25fr;
	grid-template-rows: auto;
	grid-template-areas:
		'title title . category'
		'description description description checkBox'
		'description description description checkBox'
		'description description description . '
		'link price price price ';
`

const Title = styled.span`
	grid-area: title;
	font-weight: bold;
	justify-self: left;
`

const Description = styled.span`
	grid-area: description;
	justify-self: left;
	font-size: 14px;
`

const Category = styled.span`
	grid-area: category;
	color: #1f2f98;
	font-size: 12px;
	justify-self: end;
	align-self: center;
`

const Price = styled.div`
	grid-area: price;
	justify-self: end;
	font-size: 12px;
	text-align: end;
`

const Link = styled.a`
	grid-area: link;
	padding: 5px;
	text-decoration: none;
	font-size: 12px;
	color: #787ff6;
	cursor: default;
`

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
	grid-area: checkBox;
	justify-self: end;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`
const StyledCheckbox = styled.div`
	display: inline-block;
	width: 24px;
	height: 24px;
	background: ${props => (props.checked ? '#4adede' : '#ddd')};
	border-radius: 3px;
	transition: all 150ms;
`
const Buttons = styled.div`
	display: inline;
	padding: 15px;
	margin-right: 20px;
	background: #787ff6;
	font-size: 14px;
	font-weight: 500;
	color: #fbfbfb;
	border: none;
	border-radius: 50px;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	transition: 0.35s;
`

const Message = styled.div`
	margin: 10px;
`

const HorizontalLine = styled.div`
	align-self: center;
	background: white;
	width: 200px;
	border: 0;
	height: 1px;
	margin: 20px;
`
