import React from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

import { PostingForm, PostInput } from '../../components/Forms'
import { PostButton } from '../../components/Buttons'

export default function CommentForm({ loggedInUser, postId }) {
	function handleSubmit(event) {
		event.preventDefault()
		const form = event.target
		const formData = new FormData(form)
		const postData = Object.fromEntries(formData)
		postData['handle'] = loggedInUser.handle
		postData['imageUrl'] = loggedInUser.imageUrl

		axios.post(`/post/${postId}/comment`, postData).catch(err => {
			console.error(err)
		})
	}

	return (
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
	)
}

// body: req.body.body,
// createdAt: new Date().toISOString(),
// postId: req.params.postId,
// userHandle: req.user.handle,
// userImage: req.user.imageUrl
