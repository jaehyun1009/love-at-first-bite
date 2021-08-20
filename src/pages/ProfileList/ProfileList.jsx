import React, { Component } from 'react';
import { getAllProfiles } from '../../services/profileService';
import ProfileCard from '../../components/ProfileCard/ProfileCard'

class ProfileList extends Component {
  state = {
    profiles: [],
    adminIds: ['611ef1eab3dab756f1debf85', '611ef38fa1155210c56216d8', '611f020379f1d9827023b346']
  }
  async componentDidMount(){
    const profiles = await getAllProfiles()
    this.setState({profiles})
  }
  render(){
    return (
      <>
        <h1>Profile List</h1>
        {this.state.adminIds.includes(this.props?.userProfile?._id) && this.state.profiles.map(profile => 
          <ProfileCard
            key={profile._id}
            profile={profile}
          />
        )}
      </>
    )
  }
}

export default ProfileList