//IMPORT FUNCTIONALITY
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

//IMPORT COMPONENTS
import DeletePost from './DeletePost'
import LikePost from './LikePost'
import Comments from './Comments'
// import loading from '../../json/loading.json'

export default function Posting({ post, loggedInUser }) {
	const [isCommentsShown, setIsCommentsShown] = useState(false)
	const [getComments, setGetComments] = useState([])

	useEffect(() => {
		axios
			.get(`/post/${post.postId}`)
			.then(res => {
				setGetComments(res.data)
			})
			.catch(err => {
				console.error(err)
			})
	}, [post.postId])

	function toggleComments() {
		setIsCommentsShown(!isCommentsShown)
	}

	const showHideClassName = isCommentsShown ? 'open' : ''

	dayjs.extend(relativeTime)

	return (
		<>
			<Grid>
				<Avatar src={post.userImage} alt="" />
				<LinkStyled to={`/${post.userHandle}`}>
					<Name>{post.userHandle}</Name>
				</LinkStyled>
				<DeletePost postId={post.postId} />
				<TimeStamp>{dayjs(post.createdAt).fromNow()}</TimeStamp>
				<Body>{post.body}</Body>
				<HorizontalLine />
				<Likes>
					{post.likeCount} <Heart>&hearts; </Heart>
				</Likes>
				<CommentCount
					onClick={toggleComments}
					isCommentsShown={isCommentsShown}
				>
					{post.commentCount} comments
				</CommentCount>
				<LikePost postId={post.postId} loggedInUser={loggedInUser} />
			</Grid>
			<CommentContainer className={showHideClassName}>
				{isCommentsShown &&
					getComments.comments.map(() => (
						<Comments
							postId={post.postId}
							loggedInUser={loggedInUser}
							comment={getComments}
						/>
					))}
			</CommentContainer>
		</>
	)
}

const CommentContainer = styled.div`
	visibility: hidden;

	&.open {
		visibility: visible;
	}
`
const Grid = styled.div`
	display: grid;
	padding: 15px;
	margin: 10px;
	margin-bottom: 20px;
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

const CommentCount = styled.div`
	align-self: center;
	grid-area: comments;
	padding: 5px;
	font-size: 14px;
`

const Heart = styled.span`
	align-self: center;
	color: #787ff6;
`
