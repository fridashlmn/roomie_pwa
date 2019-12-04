let db = {
	users: [
		{
			userId: 'dh23ggj5h32g543j5gf43',
			email: 'user@email.com',
			handle: 'malina',
			createdAt: '2019-03-15T10:59:52.798Z',
			imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
			firstName: 'Malina',
			lastName: 'Stark',
			durationStart: '01.12.2016',
			durationEnd: 'unlimited',
			rent: '500 €',
			deposit: '750 €'
		}
	],
	posts: [
		{
			userHandle: 'malina',
			body: 'This is a sample scream',
			createdAt: '2019-03-15T10:59:52.798Z',
			likeCount: 5,
			commentCount: 3
		}
	],
	comments: [
		{
			userHandle: 'malina',
			postId: '3T2GUVZi0FJRrM0paaqZ',
			body: 'nice one mate!',
			createdAt: '2019-12-03T10:59:52.798Z'
		}
	],
	notifications: [
		{
			recipient: 'malina',
			sender: 'john',
			read: 'true | false',
			postId: '3T2GUVZi0FJRrM0paaqZ',
			type: 'like | comment',
			createdAt: '2019-03-15T10:59:52.798Z'
		}
	]
}
const userDetails = {
	// Redux data
	credentials: {
		userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
		email: 'user@email.com',
		handle: 'user',
		createdAt: '2019-03-15T10:59:52.798Z',
		imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
		firstName: 'Malina',
		lastName: 'Stark',
		durationStart: '01.12.2016',
		durationEnd: 'unlimited',
		rent: '500 €',
		deposit: '750 €'
	},
	likes: [
		{
			userHandle: 'malina',
			postId: 'KhgfUTjEHILGMVXg98vR'
		},
		{
			userHandle: 'malina',
			postId: '3IOnFoQexRcofs5OhBXO'
		}
	]
}
