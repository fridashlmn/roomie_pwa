//IMPORT FUNCTIONALITY
import React, { useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

//IMPORT COMPONENTS
import Header from './components/Header'
import Navbar from './components/Navbar'
import ScrollToTop from './utils/ScrollToTop'
import profileData from './json/profiles.json'
import contractsData from './json/contracts.json'

//IMPORT PAGES
import ProfileDetails from './pages/Profiles/ProfileDetails'
import ProfileTeaser from './pages/Profiles/ProfileTeaser'
import ProfileDefault from './pages/Profiles/ProfileDefault'
import ProfileForm from './pages/Profiles/ProfileForm'
import ContractsTeaser from './pages/Contracts/ContractsTeaser'
import ContractDetails from './pages/Contracts/ContractsDetails'
import Dashboard from './pages/Dashboard/Dashboard'
import ContractForm from './pages/Contracts/ContractsForm'
import ContractsDefault from './pages/Contracts/ContractsDefault'
import SocialWall from './pages/SocialWall/SocialWall'
import LogIn from './pages/Login/LogIn'
import SignUp from './pages/Signup/SignUp'

export default function App() {
	const [selectedProfile, setSelectedProfile] = useState(profileData[0])
	const [navIsOpen, setNavIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState(contractsData[0])

	const token = localStorage.IdToken

	return (
		<Router>
			{token ? '' : <Redirect to="/login" />}
			<ScrollToTop />
			<Navbar toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
			<Header toggleNavOpen={toggleNavOpen} />
			<Switch>
				<Route path="/login">
					<LogIn />
				</Route>
				<Route path="/signup">
					<SignUp />
				</Route>
				<Route exact path="/">
					<Dashboard profile={selectedProfile} />
				</Route>
				<Route path="/flatmates">
					{profileData === {} ? (
						<ProfileDefault />
					) : (
						<ProfileTeaser
							profileData={profileData}
							handleClickUserForDetails={index =>
								handleClickUserForDetails(index)
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
				<Route path="/socialwall">
					<SocialWall />
				</Route>
				<Route path="/contracts">
					{contractsData === {} ? (
						<ContractsDefault />
					) : (
						<ContractsTeaser
							contractsData={contractsData}
							handleClickContractForDetails={index =>
								handleClickContractForDetails(index)
							}
						/>
					)}
				</Route>
				<Route path={`/${selectedContract.title}`}>
					<ContractDetails contract={selectedContract} />
				</Route>
				<Route path="/newcontract">
					<ContractForm />
				</Route>
			</Switch>
		</Router>
	)

	function toggleNavOpen() {
		setNavIsOpen(!navIsOpen)
	}

	function handleClickUserForDetails(index) {
		setSelectedProfile(profileData[index])
	}

	function handleClickContractForDetails(index) {
		setSelectedContract(contractsData[index])
	}
}
