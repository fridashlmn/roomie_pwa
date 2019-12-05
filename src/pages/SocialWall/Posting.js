import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export default function Posting({ post }) {
	dayjs.extend(relativeTime)
	return (
		<Grid>
			<Avatar src={post.userImage} alt="" />
			<LinkStyled to={`/${post.userHandle}`}>
				<Name>{post.userHandle}</Name>
			</LinkStyled>
			<TimeStamp>{dayjs(post.createdAt).fromNow()}</TimeStamp>
			<Body>{post.body}</Body>
			<Likes>
				{post.likeCount} <Heart>&hearts; </Heart>
			</Likes>
			<Comments>{post.commentCount} comments</Comments>
			<HorizontalLine />
			<LikeButton>LIKE</LikeButton>
			<CommentButton>COMMENT</CommentButton>
		</Grid>
	)
}
const Grid = styled.div`
	display: grid;
	padding: 15px;
	margin-bottom: 20px;
	border-radius: 2px;
	box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	grid-gap: 5px;
	grid-template-columns: 50px 50px auto auto;
	grid-template-rows: auto;
	grid-template-areas:
		'avatar name . timestamp'
		'body body body body'
		'likes comments comments .'
		'hr hr hr hr'
		'likeBtn likeBtn commentBtn commentBtn';
`

const HorizontalLine = styled.div`
	grid-area: hr;
	align-self: center;
	background: #7bd5f5;
	width: 200px;
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
`

const LinkStyled = styled(Link)`
	text-decoration: none;
	place-self: center;
	cursor: default;
	color: #222;
`

const TimeStamp = styled.div`
	place-self: center;
	grid-area: timestamp;
`

const Body = styled.div`
	grid-area: body;
	padding: 10px;
	padding-bottom: 20px;
	font-weight: regular;
	place-self: left;
`

const Likes = styled.div`
	grid-area: likes;
	padding: 5px;
	font-size: 14px;
`

const Comments = styled.div`
	grid-area: comments;
	padding: 5px;
	font-size: 14px;
`

const Heart = styled.span`
	color: #787ff6;
`

const LikeButton = styled.button`
	grid-area: likeBtn;
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
`

const CommentButton = styled.button`
	grid-area: commentBtn;
	margin-top: 10px;
	width: 125px;
	background: #787ff6;
	font-size: 14px;
	color: #fbfbfb;
	border-radius: 15px;
	border: none;
	box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`
