const db = require('../util/admin')

exports.getAllPosts = (req, res) => {
	db.collection('posts')
		.orderBy('createdAt', 'desc')
		.get()
		.then(data => {
			let posts = []
			data.forEach(doc => {
				posts.push({
					postId: doc.id,
					body: doc.data().body,
					userHandle: doc.data().userHandle,
					createdAt: doc.data().createdAt,
					likeCount: doc.data().likes,
					commentCount: doc.data().comments
				})
			})
			return res.json(posts)
		})
		.catch(err => console.error(err))
}

exports.postOnePost = (req, res) => {
	const newPost = {
		body: req.body.body,
		userHandle: req.body.userHandle,
		createdAt: new Date().toISOString()
	}

	db.collection('posts')
		.add(newPost)
		.then(doc => {
			res.json({ message: `document ${doc.id} created succsessfully` })
		})
		.catch(err => {
			res.status(500).json({ error: `Something went wrong` })
			console.error(err)
		})
}
