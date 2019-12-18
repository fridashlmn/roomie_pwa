import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import loading from '../../json/loading.json'

import CommentForm from './CommentForm'

export default function Comments({ comment, loggedInUser, postId }) {
	dayjs.extend(relativeTime)
	return (
		<>
			<Grid>
				<Avatar src={comment.userImage} alt="" />
				<Name>{comment.userHandle}</Name>
				{/* <DeletePost postId={comment.postId} /> */}
				<TimeStamp>{dayjs(comment.createdAt).fromNow()}</TimeStamp>
				<Body>{comment.body}</Body>
				<HorizontalLine />
				{/* <CommentForm postId={postId} loggedInUser={loggedInUser} /> */}
			</Grid>
		</>
	)
}

const Grid = styled.div`
	display: grid;
	padding: 15px;
	margin-top: -20px;
	margin-left: 20px;
	border-radius: 2px;
	box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	grid-gap: 5px;
	grid-template-columns: 0.5fr 0.5fr 1fr 2fr;
	grid-template-rows: auto;
	grid-template-areas:
		'avatar . . deleteBtn'
		'avatar name . timestamp'
		'body body body body'
		'hr hr hr hr'
		'likes comments comments likeBtn';
`

const HorizontalLine = styled.div`
	grid-area: hr;
	align-self: center;
	background: #7bd5f5;
	width: 90vw;
	border: 0;
	height: 1px;
`

const Avatar = styled.img`
	grid-area: avatar;
	place-self: center;
	margin: 10px;
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
`

const Name = styled.div`
	grid-area: name;
	margin-top: 25px;
`

const LinkStyled = styled(Link)`
	text-decoration: none;
	place-self: center;
	cursor: default;
	color: #222;
`

const TimeStamp = styled.div`
	justify-self: end;
	align-self: center;
	grid-area: timestamp;
	font-size: 14px;
`

const Body = styled.div`
	grid-area: body;
	padding: 10px;
	padding-bottom: 20px;
	font-weight: regular;
	place-self: left;
`

const Likes = styled.div`
	align-self: center;
	grid-area: likes;
	padding: 5px;
	font-size: 14px;
`
const Heart = styled.span`
	align-self: center;
	color: #787ff6;
`

{
	/* <CommentForm postId={postId} loggedInUser={loggedInUser} /> */
}
