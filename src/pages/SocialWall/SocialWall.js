import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../../components/Container'
import Posting from './Posting'
import NewPost from './NewPost'

export default function SocialWall({ loggedInUser }) {
	const [posts, setPosts] = useState([])
	const [isFormShown, setIsFormShown] = useState(false)

	function toggleNewPostForm() {
		setIsFormShown(!isFormShown)
	}

	useEffect(() => {
		axios
			.get('/posts')
			.then(res => {
				setPosts(res.data)
			})
			.catch(err => {
				console.error(err)
			})
	}, [])

	let postingsAvailable =
		posts && !isFormShown
			? posts.map(post => <Posting post={post} loggedInUser={loggedInUser} />)
			: ''

	return (
		<Container margin={'0px'} padding={'0px'} marginTop={'10px'}>
			<NewPost
				loggedInUser={loggedInUser}
				isFormShown={isFormShown}
				toggleNewPostForm={toggleNewPostForm}
			/>
			{postingsAvailable}
		</Container>
	)
}
