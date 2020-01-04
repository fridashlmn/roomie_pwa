const { db } = require('../util/admin')

//GET ALL Expenses
exports.getAllExpenses = (req, res) => {
	db.collection('expenses')
		.orderBy('createdAt', 'desc')
		.get()
		.then(data => {
			let expenses = []
			data.forEach(doc => {
				expenses.push({
					expensesId: doc.id,
					body: doc.data().body,
					userHandle: doc.data().userHandle,
					createdAt: doc.data().createdAt,
					category: doc.data().category
				})
			})
			return res.json(expenses)
		})
		.catch(err => {
			console.error(err)
			res.statu(500).json({ error: err.code })
		})
}

exports.postOneExpense = (req, res) => {
	if (req.body.body.trim() === '') {
		return res.status(400).json({ body: 'Body must not be empty' })
	}

	const newExpense = {
		body: req.body.body,
		userHandle: req.body.handle,
		createdAt: new Date().toISOString(),
		category: req.body.category
	}

	db.collection('expenses')
		.add(newExpense)
		.then(doc => {
			const resExpense = newExpense
			resExpense.expenseId = doc.id
			res.json(resExpense)
		})
		.catch(err => {
			res.status(500).json({ error: 'something went wrong' })
			console.error(err)
		})
}
