import React, { useState } from 'react'

//IMPORT COMPONENTS
import { Container } from '../../components/Container'
import tobuyData from './tobuy.json'
import NewToBuy from './NewToBuy'
import ToBuyItems from './ToBuyItems.js'

export default function ToBuy({
	loggedInUser,
	isFormShown,
	toggleNewPostForm
}) {
	const [toBuy] = useState(tobuyData)

	let expensesAvailable =
		toBuy && !isFormShown
			? toBuy.map(({ title, description, category, price, link }) => (
					<ToBuyItems
						title={title}
						description={description}
						category={category}
						price={price}
						link={link}
					/>
			  ))
			: ''

	return (
		<Container margin={'0px'} padding={'0px'} marginTop={'10px'}>
			{expensesAvailable}
			<NewToBuy
				loggedInUser={loggedInUser}
				isFormShown={isFormShown}
				toggleNewPostForm={toggleNewPostForm}
			/>
		</Container>
	)
}
