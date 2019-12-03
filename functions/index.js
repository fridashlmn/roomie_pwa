const functions = require('firebase-functions')
const app = require('express')()
const FBAuth = require('./util/fbAuth')

const {
	getAllPosts,
	postOnePost,
	getPost,
	commentOnPost
} = require('./handlers/posts')
const {
	signup,
	login,
	uploadImage,
	addUserDetails,
	getAuthenticatedUser
} = require('./handlers/users')

//post routes
app.get('/posts', getAllPosts)
app.post('/post', postOnePost)
app.get('/post/:postId', getPost)
app.post('/post/:postId/comment', FBAuth, commentOnPost)
//TO DO: DELETE POST, LIKE A POST, UNLIKE A POST, COMMENT ON SCREAM

//user routes
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)

exports.api = functions.region('europe-west1').https.onRequest(app)
