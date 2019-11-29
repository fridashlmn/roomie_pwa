import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ScrollToTop from './utils/ScrollToTop'
import profileData from './json/profiles.json'
import contractsData from './json/contracts.json'
import ProfileDetails from './pages/Profiles/ProfileDetails'
import ProfileTeaser from './pages/Profiles/ProfileTeaser'
import ProfileDefault from './pages/Profiles/ProfileDefault'
import ProfileForm from './pages/Profiles/ProfileForm'
import ContractsTeaser from './pages/Contracts/ContractsTeaser'
import ContractDetails from './pages/Contracts/ContractsDetails'
import Dashboard from './pages/Dashboard/Dashboard'

export default function App() {
	const [selectedProfile, setSelectedProfile] = useState(profileData[0])
	const [navIsOpen, setNavIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState(contractsData[0])

	return (
		<Router>
			<ScrollToTop />
			<Navbar toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
			<Header toggleNavOpen={toggleNavOpen} />
			<Switch>
				<Route exact path="/">
					<Dashboard profile={selectedProfile} />
				</Route>
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
				<Route path={`/${selectedProfile.firstName}`}>
					<ProfileDetails profile={selectedProfile} />
				</Route>
				<Route path="/newroomie">
					<ProfileForm />
				</Route>
				<Route path="/contracts">
					<ContractsTeaser
						contractsData={contractsData}
						handleClickContractforDetails={index =>
							handleClickContractforDetails(index)
						}
					/>
				</Route>
				<Route path={`/${selectedContract.title}`}>
					<ContractDetails contract={selectedContract} />
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

	function handleClickContractforDetails(index) {
		setSelectedContract(contractsData[index])
	}
}
