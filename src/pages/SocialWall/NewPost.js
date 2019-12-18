import React from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

import { PostingForm, PostInput } from '../../components/Forms'
import { PostButton } from '../../components/Buttons'

export default function NewPost({
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
		postData['imageUrl'] = loggedInUser.imageUrl
		axios
			.post('/post', postData)
			.then(() => {
				toggleNewPostForm()
			})
			.catch(err => {
				console.error(err)
			})
	}

	function renderForm(toggleHideShow) {
		return (
			<>
				<CloseButton onClick={toggleNewPostForm}>&times;</CloseButton>
				<PostingForm onSubmit={handleSubmit}>
					<PostInput
						placeholder="tell your roomies :)"
						id="body"
						name="body"
						type="text"
					/>
					<PostButton type="submit" onSubmit={handleSubmit}>
						submit
					</PostButton>
				</PostingForm>
			</>
		)
	}
	return (
		<>
			<OpenButton className={showHideClassName} onClick={toggleNewPostForm}>
				+
			</OpenButton>
			{isFormShown && renderForm(toggleNewPostForm)}
		</>
	)
}

const OpenButton = styled.div`
	font-size: 36px;
	color: #fdfdfd;
	background: #787ff6;
	border-radius: 50%;
	padding: 5px 15px;
	font-weight: thin;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

	&.open {
		visibility: hidden;
	}
`

const CloseButton = styled.div`
	font-size: 36px;
	color: #fdfdfd;
	background: #787ff6;
	border-radius: 50%;
	padding: 5px 15px;
	font-weight: thin;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`
