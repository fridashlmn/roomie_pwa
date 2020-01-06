//IMPORT FUNCTIONALITY
import React from 'react'
import axios from 'axios'

//IMPORT COMPONENTS
import { PostingForm, PostInput } from '../../components/Forms'
import {
	PostButton,
	AddItemButton,
	CloseButton
} from '../../components/Buttons'

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

	function renderForm() {
		return (
			<>
				<CloseButton onClick={toggleNewPostForm}>&times;</CloseButton>
				<PostingForm onSubmit={handleSubmit}>
					<PostInput
						placeholder="what's new? :)"
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
			<AddItemButton className={showHideClassName} onClick={toggleNewPostForm}>
				&#43;
			</AddItemButton>
			{isFormShown && renderForm(toggleNewPostForm)}
		</>
	)
}
