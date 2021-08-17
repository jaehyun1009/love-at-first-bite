import mongoose from 'mongoose'

const messagedSchema = new mongoose.Schema({
  newestMessage: String,
  otherPerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  }
})

const profileSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    profilePic: String,
    birthday: Date,
    location: String,
    aboutMe: String,
    userGender: String,
    sexualOrientation: String,
    searchingFor: [{
      type: String,
      enum: ['Love', 'Friendship', 'Both'],
    }],
    minimumAge: {
      type: Number,
      min: 18,
      max: 99,
      default: 18
    },
    maximumAge: {
      type: Number,
      min: 18,
      max: 99,
      default: 99
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      default: 'Other'
    },
    lookingFor: [{
      type: String,
      enum: ['Male', 'Female', 'Other'],
    }],
    restaurants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant'
    }],
    messaged: [messagedSchema]

  },
  {
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}