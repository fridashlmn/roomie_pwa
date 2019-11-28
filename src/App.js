import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ScrollToTop from './utils/ScrollToTop'
import profileData from './pages/Profiles/profiles.json'
import ProfileDetails from './pages/Profiles/ProfileDetails'
import ProfileTeaser from './pages/Profiles/ProfileTeaser'
import ProfileDefault from './pages/Profiles/ProfileDefault'
import ProfileForm from './pages/Profiles/ProfileForm'

export default function App() {
	const [selectedProfile, setSelectedProfile] = useState(profileData[0])
	const [navIsOpen, setNavIsOpen] = useState(false)

	return (
		<Router>
			<ScrollToTop />
			<Navbar toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
			<Header toggleNavOpen={toggleNavOpen} />
			<Switch>
				<Route path="/flatmates">
					{profileData === {} ? (
						<ProfileDefault />
					) : (
						<ProfileTeaser
							profileData={profileData}
							handleClickUserforDetails={index =>
								handleClickUserforDetails(index)
							}
						/>
					)}
				</Route>
				<Route path="/newroomie">
					<ProfileForm />
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
