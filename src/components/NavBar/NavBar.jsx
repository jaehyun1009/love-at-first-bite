import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import ProfileCard from '../ProfileCard/ProfileCard'

const NavBar = ({ userProfile, handleLogout, history }) => {
	return (
		<>
			{userProfile ? (
				<nav>
					<div>
						<ul>
							<li>Welcome, <ProfileCard key={userProfile._id} profile={userProfile}/></li>
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
							<SearchForm history={history} />
						</ul>
					</div>
				</nav>
			) : (
				<nav>
					<div>
						<ul>
							<li>
								<Link to="/login">Log In</Link>
							</li>
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
