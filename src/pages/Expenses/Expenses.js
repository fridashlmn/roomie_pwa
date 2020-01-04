import React, { useState } from 'react'
import styled from 'styled-components'

//IMPORT COMPINENTS
import ToBuy from './ToBuy'
import Wallet from './Wallet'

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

const SwitchPagesButton = styled.button`
	margin: 20px;
	width: 70px;
	height: 70px;
	background: #787ff6;
	border: none;
	border-radius: 50%;
	color: #fdfdfd;
	font-size: 48px;
	font-weight: 300;
	position: absolute;
	bottom: 0;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	&.open {
		visibility: hidden;
	}
`
