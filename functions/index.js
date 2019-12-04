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
	markNotificationsRead
} = require('./handlers/users')

//POSTING ROUTES
app.get('/posts', FBAuth, getAllPosts)
app.post('/post', FBAuth, postOnePost)
app.get('/post/:postId', FBAuth, getPost)
app.post('/post/:postId/comment', FBAuth, commentOnPost)
app.get('/post/:postId/like', FBAuth, likePost)
app.get('/post/:postId/unlike', FBAuth, unlikePost)
app.delete('/post/:postId', FBAuth, deletePost)

//USER ROUTES
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)
//actually public route - do i need it?!
app.get('/user/:handle', FBAuth, getUserDetails)
app.post('/notifications', FBAuth, markNotificationsRead)

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
exports.createNotificationOnUnLike = functions
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
				if (doc.exists) {
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
