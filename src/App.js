import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProfileDetails from './pages/Profiles/ProfileDetails'

export default function App() {
	const [navIsOpen, setNavIsOpen] = useState(false)

	function toggleNavOpen() {
		setNavIsOpen(!navIsOpen)
	}
	return (
		<Router>
			<Navbar toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
			<Header toggleNavOpen={toggleNavOpen} />
			<Switch>
				<Route exact path="/">
					//placeholder
				</Route>
			</Switch>
			<Switch>
				<Route path="/profile">
					<ProfileDetails />
				</Route>
			</Switch>
		</Router>
	)
}
