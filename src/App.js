import React from 'react'
import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'
import ProfileDetails from './pages/Profiles/ProfileDetails'

export default function App() {
	return (
		<div>
			<GlobalStyles />
			<Header />
			<ProfileDetails />
		</div>
	)
}
