//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

//IMPORT COMPONENTS
import {
	PostButton,
	OpenButtonBig,
	CloseButton
} from '../../components/Buttons'
import { PostingForm, PostInput, Input } from '../../components/Forms'

export default function NewToBuy({
	loggedInUser,
	isFormShown,
	toggleNewPostForm
}) {
	const showHideClassName = isFormShown ? 'open' : ''

	function handleSubmit(event) {
		event.preventDefault()
		const form = event.target
		const formData = new FormData(form)
		const postData = Object.fromEntries(formData)
		postData['handle'] = loggedInUser.handle
		postData['category'] = 'test'

		axios
			.post('/expenses', postData)
			.then(() => {
				toggleNewPostForm()
			})
			.catch(err => {
				console.error(err)
			})
	}

	function renderForm() {
		return (
			<>
				<CloseButton onClick={toggleNewPostForm}>&times;</CloseButton>
				<PostingForm marginTop="10px" onSubmit={handleSubmit}>
					<Input
						placeholder="title"
						id="category"
						name="category"
						type="text"
						marginTop="5px"
					/>
					<PostInput
						placeholder="what do we need? describe it!"
						id="body"
						name="body"
						type="text"
						marginTop="5px"
					/>
					<Input
						placeholder="price"
						id="category"
						name="category"
						type="text"
						marginTop="5px"
					/>

					<SelectWrapper>
						<Select>
							<Option selected disabled>
								category
							</Option>
							<Option>utils</Option>
							<Option>funiture</Option>
							<Option>food</Option>
							<Option>drinks</Option>
							<Option>garden</Option>
							<Option>maintenace</Option>
						</Select>
					</SelectWrapper>
					<PostButton type="submit" onSubmit={handleSubmit}>
						submit
					</PostButton>
				</PostingForm>
			</>
		)
	}
	return (
		<>
			<OpenButtonBig className={showHideClassName} onClick={toggleNewPostForm}>
				&#43;
			</OpenButtonBig>
			{isFormShown && renderForm(toggleNewPostForm)}
		</>
	)
}

const SelectWrapper = styled.div`
	margin-top: 10px;
	width: 300px;
`

const Select = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background: #fdfdfd;
	border: none;
	border-radius: 2px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	color: #8e8e8e;
	cursor: pointer;
	font-size: 16px;
	font-weight: 400;
	height: 40px;
	outline: none;
	padding-left: 10px;
`
const Option = styled.option`
	color: #8e8e8e;
	font-weight: 400;
`
