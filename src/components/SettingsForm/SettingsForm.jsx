import React, { Component } from 'react'
import { DateTime, Settings } from 'luxon'

class SettingsForm extends Component{
  state = {
    email: '',
    changeEmail: '',
    changeEmailConf: '',
    profilePic: '',
    birthday: '',
    minimumAge: '',
    maximumAge: '',
    gender: '',
    male: false,
    female: false,
    other: false
  }

  componentDidMount(){
    this.setState({
      email: this.props.userProfile?.email,
      profilePic: this.props.userProfile?.profilePic,
      birthday: this.props.userProfile?.birthday,
      minimumAge: this.props.userProfile?.minimumAge,
      maximumAge: this.props.userProfile?.maximumAge,
      gender: this.props.userProfile?.gender,
      male: this.props.userProfile?.lookingFor?.includes('Male'),
      female: this.props.userProfile?.lookingFor?.includes('Female'),
      other: this.props.userProfile?.lookingFor?.includes('Other')
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.userProfile !== this.props.userProfile)
    this.setState({
      email: this.props.userProfile.email,
      profilePic: this.props.userProfile.profilePic,
      birthday: this.props.userProfile.birthday,
      minimumAge: this.props.userProfile.minimumAge,
      maximumAge: this.props.userProfile.maximumAge,
      gender: this.props.userProfile.gender,
      male: this.props.userProfile.lookingFor?.includes('Male'),
      female: this.props.userProfile.lookingFor?.includes('Female'),
      other: this.props.userProfile.lookingFor?.includes('Other')
    })
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChangeNumber = e => {
    e.preventDefault()
    if (!isNaN(e.target.value)){
      const val = Math.floor(parseInt(e.target.value))
      this.setState({
        [e.target.name]: val
      })
    }
  }

  handleClick = e => {
    this.setState({
      [e.target.name]: e.target.id
    })
  }

  handlePref = e => {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.props.history.push('/')
  }

  isFormInvalid(){
    const { changeEmail, changeEmailConf, birthday, minimumAge, maximumAge } = this.state
    const age = Math.floor(DateTime.local().diff(DateTime.fromISO(birthday), 'years').years)
    if (age < 18 || age > 99 || minimumAge < 18 || maximumAge > 99 || minimumAge > maximumAge)
      return true
    return !(birthday && changeEmail === changeEmailConf)
  }

  render(){
    const { changeEmail, changeEmailConf, profilePic, birthday, minimumAge, maximumAge, gender, lookingFor } = this.state
    return (
      <>
        <form
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <h2>Settings</h2>
          <div>
          <label htmlFor="changeEmail">Change Email</label>
          <input
            type="email"
            autoComplete="off"
            id="changeEmail"
            value={changeEmail}
            name="changeEmail"
            onChange={this.handleChange}
            placeholder='Change Email'
          />
          </div>
          <div>
          <label htmlFor="changeEmailConf">Change Email (Confirm)</label>
          <input
            type="email"
            autoComplete="off"
            id="changeEmailConf"
            value={changeEmailConf}
            name="changeEmailConf"
            onChange={this.handleChange}
            placeholder='Change Email Confirmation'
          />
          </div>
          <div>
          <label htmlFor="profilePic">Profile Picture (URL)</label>
          <input
            type="text"
            autoComplete="off"
            id="profilePic"
            value={profilePic}
            name="profilePic"
            onChange={this.handleChange}
            placeholder='Profile Picture URL'
          />
          </div>
          <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            autoComplete="off"
            id="birthday"
            value={DateTime.fromISO(birthday, {
              setZone: true
            }).toFormat('yyyy-MM-dd')}
            name="birthday"
            onChange={this.handleChange}
            placeholder='Profile Picture URL'
          />
          </div>
          <div>
          <label htmlFor="mimimumAge">Minimum Age Preferred</label>
          <input
            type="number"
            min="18"
            max="99"
            autoComplete="off"
            id="minimumAge"
            value={minimumAge}
            name="minimumAge"
            onChange={this.handleChangeNumber}
            placeholder='Profile Picture URL'
          />
          </div>
          <div>
          <label htmlFor="maximumAge">Maximum Age Preferred</label>
          <input
            type="number"
            min="18"
            max="99"
            autoComplete="off"
            id="maximumAge"
            value={maximumAge}
            name="maximumAge"
            onChange={this.handleChangeNumber}
            placeholder='Profile Picture URL'
          />
          </div>
          <div >
            <label htmlFor="gender">Gender</label>
            <br />
            <input
              type="radio"
              id="Male"
              value={gender}
              name="gender"
              onClick={this.handleClick}
              checked={gender === "Male"}
            />
            <label htmlFor="Male">Male</label>&nbsp;
            <input
              type="radio"
              id="Female"
              value={gender}
              name="gender"
              onClick={this.handleClick}
              checked={gender === "Female"}
            />
            <label htmlFor="Female">Female</label>&nbsp;
            <input
              type="radio"
              id="Other"
              value={gender}
              name="gender"
              onClick={this.handleClick}
              checked={gender === "Other"}
            />
            <label htmlFor="Other">Other</label>
          </div>
          <div>
            <label>Gender Preferences</label>
            <br />
            <input
              type="checkbox"
              id="Male"
              name="male"
              onChange={this.handlePref}
              defaultChecked={this.state.male}
            /><label htmlFor="Male">Male</label>&nbsp;
            <input
              type="checkbox"
              id="Female"
              name="female"
              onChange={this.handlePref}
              defaultChecked={this.state.female}
            /><label htmlFor="Female">Female</label>&nbsp;
            <input
              type="checkbox"
              id="Other"
              name="other"
              onChange={this.handlePref}
              defaultChecked={this.state.other}
            /><label htmlFor="Other">Other</label>
          </div>
          <button disabled={this.isFormInvalid()}>Submit</button>
        </form>
      </>
    )
  }
}

export default SettingsForm