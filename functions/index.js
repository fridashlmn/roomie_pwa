const functions = require('firebase-functions')
const app = require('express')()
const FBAuth = require('./util/fbAuth')

const { db } = require('./util/admin')

const {
	getAllPosts,
	postOnePost,
	getPost,
	commentOnPost,
	likePost,
	unlikePost,
	deletePost
} = require('./handlers/posts')
const {
	signup,
	login,
	uploadImage,
	addUserDetails,
	getAuthenticatedUser,
	getUserDetails,
	markNotificationsRead,
	getAllUsers
} = require('./handlers/users')

//POSTING ROUTES
app.get('/posts', getAllPosts)
app.post('/post', postOnePost)
app.get('/post/:postId', getPost)
app.post('/post/:postId/comment', commentOnPost)
app.get('/post/:postId/like', likePost)
app.get('/post/:postId/unlike', unlikePost)
app.delete('/post/:postId', deletePost)

//USER ROUTES
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)
//actually public route - do i need it?!
app.get('/user/:handle', FBAuth, getUserDetails)
app.post('/notifications', FBAuth, markNotificationsRead)
app.get('/users', getAllUsers)

//API FUNCTION
exports.api = functions.region('europe-west1').https.onRequest(app)

//TRIGGER LIKE NOTIFICATIONS
exports.createNotificationOnLike = functions
	.region('europe-west1')
	.firestore.document('likes/{id}')
	.onCreate(snapshot => {
		return db
			.doc(`/posts/${snapshot.data().postId}`)
			.get()
			.then(doc => {
				if (
					doc.exists &&
					doc.data().userHandle !== snapshot.data().userHandle
				) {
					return db.doc(`/notifications/${snapshot.id}`).set({
						postId: doc.id,
						createdAt: new Date().toISOString(),
						recipient: doc.data().userHandle,
						sender: snapshot.data().userHandle,
						type: 'like',
						read: false
					})
				}
			})
			.catch(err => {
				console.error(err)
			})
	})

//DELETE LIKE NOTIFICATION WHEN UNLIKED
exports.deleteNotificationOnUnLike = functions
	.region('europe-west1')
	.firestore.document('likes/{id}')
	.onDelete(snapshot => {
		return db
			.doc(`/notifications/${snapshot.id}`)
			.delete()
			.catch(err => {
				console.error(err)
				return
			})
	})

//TRIGGER COMMENT NOTIFICATIONS
exports.createNotificationOnComment = functions
	.region('europe-west1')
	.firestore.document('comments/{id}')
	.onCreate(snapshot => {
		return db
			.doc(`/posts/${snapshot.data().postId}`)
			.get()
			.then(doc => {
				if (
					doc.exists &&
					doc.data().userHandle !== snapshot.data().userHandle
				) {
					return db.doc(`/notifications/${snapshot.id}`).set({
						postId: doc.id,
						createdAt: new Date().toISOString(),
						recipient: doc.data().userHandle,
						sender: snapshot.data().userHandle,
						type: 'comment',
						read: false
					})
				}
			})
			.catch(err => {
				console.error(err)
				return
			})
	})

//TRIGGER UPDATE USERIMAGE IN POSTS WHEN CHANGED
exports.onUserImageChange = functions
	.region('europe-west1')
	.firestore.document('/users/{userId}')
	.onUpdate(change => {
		console.log(change.before.data())
		console.log(change.after.data())
		if (change.before.data().imageUrl !== change.after.data().imageUrl) {
			console.log('image has changed')
			const batch = db.batch()
			return db
				.collection('posts')
				.where('userHandle', '==', change.before.data().handle)
				.get()
				.then(data => {
					data.forEach(doc => {
						const post = db.doc(`/posts/${doc.id}`)
						batch.update(post, { userImage: change.after.data().imageUrl })
					})
					return batch.commit()
				})
		} else return true
	})

// DELETE CORRESPONDING DATA TO DELETED POST
// exports.onPostDelete = functions
// 	.region('europe-west1')
// 	.firestore.document('/posts/{postId}')
// 	.onDelete((snapshot, context) => {
// 		const postId = context.params.postId
// 		const batch = db.batch()
// 		return db
// 			.collection('comments')
// 			.where('postId', '==', postId)
// 			.get()
// 			.then(data => {
// 				data.forEach(doc => {
// 					batch.delete(db.doc(`/comments/${doc.id}`))
// 				})
// 				return db.collection('likes').where('postId', '==', postId)
// 			})
// 			.then(data => {
// 				data.forEach(doc => {
// 					batch.delete(db.doc(`/likes/${doc.id}`))
// 				})
// 				return db.collection('notifications').where('postId', '==', postId)
// 			})
// 			.then(data => {
// 				data.forEach(doc => {
// 					batch.delete(db.doc(`/notifications/${doc.id}`))
// 				})
// 				return batch.commit()
// 			})
// 			.catch(err => {
// 				console.error(err)
// 			})
// 	})
