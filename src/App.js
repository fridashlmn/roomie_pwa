//IMPORT FUNCTIONALITY
import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'
import axios from 'axios'

//IMPORT COMPONENTS
import Header from './components/Header'
import Navbar from './components/Navbar'
import ScrollToTop from './utils/ScrollToTop'
import contractsData from './json/contracts.json'
import loading from './json/loading.json'

//IMPORT PAGES
import LogIn from './pages/Login/LogIn'
import SignUp from './pages/Signup/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'
import ProfileTeaser from './pages/Profiles/ProfileTeaser'
import ProfileDefault from './pages/Profiles/ProfileDefault'
import ProfileDetails from './pages/Profiles/ProfileDetails'
import ProfileForm from './pages/Profiles/ProfileForm'
import SocialWall from './pages/SocialWall/SocialWall'
import Calendar from './pages/Calendar/Calendar'
import Expenses from './pages/Expenses/Expenses'
import ContractsDefault from './pages/Contracts/ContractsDefault'
import ContractsTeaser from './pages/Contracts/ContractsTeaser'
import ContractDetails from './pages/Contracts/ContractsDetails'
import ContractForm from './pages/Contracts/ContractsForm'
import Settings from './pages/Settings/Settings'

export default function App() {
	const [allProfiles, setAllProfiles] = useState([])

	useEffect(() => {
		axios
			.get('/users')
			.then(res => {
				setAllProfiles(res.data)
			})
			.catch(err => {
				console.error(err)
			})
	}, [])

	const loggedInUser = allProfiles[0] || loading[0]
	const token = localStorage.IdToken
	const [navIsOpen, setNavIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState(contractsData[0])

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
					<Dashboard profile={loggedInUser} />
				</Route>
				<Route path="/flatmates">
					{allProfiles === {} ? (
						<ProfileDefault />
					) : (
						<ProfileTeaser
							profileData={allProfiles}
							handleClickUserForDetails={index =>
								handleClickUserForDetails(index)
							}
						/>
					)}
				</Route>
				<Route path={`/${allProfiles.firstName}`}>
					<ProfileDetails profile={allProfiles} />
				</Route>
				<Route path="/newroomie">
					<ProfileForm />
				</Route>
				<Route path="/socialwall">
					<SocialWall loggedInUser={loggedInUser} />
				</Route>
				<Route path="/calendar">
					<Calendar allProfiles={allProfiles} />
				</Route>
				<Route path="/expenses">
					<Expenses loggedInUser={loggedInUser} profileData={allProfiles} />
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
				<Route path="/settings">
					<Settings />
				</Route>
			</Switch>
		</Router>
	)

	function toggleNavOpen() {
		setNavIsOpen(!navIsOpen)
	}

	function handleClickUserForDetails(index) {
		setAllProfiles(allProfiles[index])
	}

	function handleClickContractForDetails(index) {
		setSelectedContract(contractsData[index])
	}
}
