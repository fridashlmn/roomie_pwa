import React, { useState } from 'react'

//IMPORT COMPINENTS
import ToBuy from './ToBuy'
import Wallet from './Wallet'
import { SwitchPagesButton } from '../../components/Buttons'

export default function Expenses({ loggedInUser, profileData }) {
	const [isWallet, setisWallet] = useState(false)
	const [isToBuy, setIsToBuy] = useState(true)
	const [isFormShown, setIsFormShown] = useState(false)

	function toggleNewPostForm() {
		setIsFormShown(!isFormShown)
	}

	function toggleWallet() {
		setisWallet(!isWallet)
		setIsToBuy(!isToBuy)
	}

	const showHideClassName = isFormShown ? 'open' : ''

	return (
		<>
			{isToBuy ? (
				<ToBuy
					isFormShown={isFormShown}
					loggedInUser={loggedInUser}
					toggleNewPostForm={() => toggleNewPostForm()}
				/>
			) : (
				''
			)}
			{isWallet ? <Wallet profileData={profileData} /> : ''}
			<SwitchPagesButton
				onClick={() => toggleWallet()}
				className={showHideClassName}
			>
				{isToBuy ? '>' : '<'}
			</SwitchPagesButton>
		</>
	)
}
