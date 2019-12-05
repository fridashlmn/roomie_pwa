import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Posting from './Posting'

export default function SocialWall() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		axios
			.get('/posts')
			.then(res => {
				console.log(res.data)
				setPosts(res.data)
			})
			.catch(err => {
				console.error(err)
			})
	}, [])

	let postingsAvailable = posts ? (
		posts.map(post => <Posting post={post} />)
	) : (
		<p> Loading...</p>
	)
	return <SocialWallContainer>{postingsAvailable}</SocialWallContainer>
}

const SocialWallContainer = styled.section`
	height: 100vh;
	margin-top: 15px;
`
