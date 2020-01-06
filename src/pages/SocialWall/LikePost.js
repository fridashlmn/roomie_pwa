//IMPORT FUNCTIONALITY
import React from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

export default function LikePost({ postId }) {
	function handleLike(postId) {
		axios.get(`/post/${postId}/like`).catch(err => {
			console.error('Didnt work....', err)
		})
	}
	return <LikeButton onClick={() => handleLike(postId)}>Like</LikeButton>
}

const LikeButton = styled.button`
	grid-area: likeBtn;
	align-self: center;
	justify-self: end;
	margin-top: 10px;
	width: 75px;
	padding: 5px;
	background: #787ff6;
	font-size: 14px;
	color: #fbfbfb;
	border-radius: 15px;
	border: none;
	box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	&:active {
		background: #1ca7ec;
	}
`
