import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import ProfileCard from '../ProfileCard/ProfileCard'
import styles from './NavBar.module.css'

const NavBar = ({ userProfile, handleLogout, history }) => {
	const profile = userProfile
	return (
		<>
			{userProfile ? (
				<nav className={styles.menu}>
						<ol>
							<li><Link to="/">Search</Link></li>
							<li><Link to={{ pathname: "/profile", state: {profile}}} >MY PROFILE</Link></li>
							<li><Link to="/users">Users</Link></li>
							<li><Link to='/messages'>messages</Link></li>
							<li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
							{/* <SearchForm history={history} /> */}
						</ol>
				</nav>
			) : (
				<nav className={styles.menu}>
						<ol>
							<li><Link to="/login">LOG IN</Link></li>
							<li><Link to="/signup">SIGN UP</Link></li>
						</ol>
				</nav>
			)}
		</>
	)
}

export default NavBar
