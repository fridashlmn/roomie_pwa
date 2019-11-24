const functions = require('firebase-functions')
const express = require('express')
const app = express()

const { getAllPosts, postOnePost } = require('./handlers/posts')

app.get('/posts', getAllPosts)
app.post('/post', postOnePost)

exports.api = functions.region('europe-west1').https.onRequest(app)
