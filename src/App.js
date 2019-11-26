import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import profileData from './pages/Profiles/profiles.json'
import ProfileDetails from './pages/Profiles/ProfileDetails'
import ProfileTeaser from './pages/Profiles/ProfileTeaser'

export default function App() {
	const [selectedProfile, setSelectedProfile] = useState(profileData[0])
	const [navIsOpen, setNavIsOpen] = useState(false)

	return (
		<Router>
			<Navbar toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
			<Header toggleNavOpen={toggleNavOpen} />
			<Switch>
				<Route path="/flatmates">
					<ProfileTeaser
						profileData={profileData}
						handleClickUserforDetails={index =>
							handleClickUserforDetails(index)
						}
					/>
				</Route>
				<Route path="/:handle">
					<ProfileDetails profile={selectedProfile} />
				</Route>
			</Switch>
		</Router>
	)

	function toggleNavOpen() {
		setNavIsOpen(!navIsOpen)
	}

	function handleClickUserforDetails(index) {
		setSelectedProfile(profileData[index])
	}
}
