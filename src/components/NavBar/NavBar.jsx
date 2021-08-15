import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import ProfileCard from '../ProfileCard/ProfileCard'
import styles from './NavBar.css'

const NavBar = ({ userProfile, handleLogout, history }) => {
	return (
		<>
			{userProfile ? (
				<nav className='menu'>
						<ol>
							<li className='menu-item'><Link to="/">HOME</Link></li>
							<li className='menu-item'><Link to="/userProfile">MY PROFILE</Link></li>
							<li className='menu-item'><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
							<li className='menu-item'><Link to="/users">Users(Temp)</Link></li>
							{/* <SearchForm history={history} /> */}
						</ol>
				</nav>
			) : (
				<nav className='menu'>
						<ol>
							<li className='menu-item'><Link to="/login">LOG IN</Link></li>
							<li className='menu-item'><Link to="/signup">SIGN UP</Link></li>
							<li className='menu-item'><Link to="/users">Users(Temp)</Link></li>
						</ol>
				</nav>
			)}
		</>
	)
}

export default NavBar
