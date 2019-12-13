import React from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

export default function DeletePost({ postId }) {
	function handleDelete(postId) {
		axios.delete(`/post/${postId}`).catch(err => {
			console.error('Didnt work....', err)
		})
	}
	return (
		<DeleteButton onClick={() => handleDelete(postId)}>&times;</DeleteButton>
	)
}

const DeleteButton = styled.button`
	grid-area: deleteBtn;
	align-self: top;
	justify-self: end;
	margin-bottom: 10px;
	padding: 5px;
	font-size: 24px;
	border: none;
`
