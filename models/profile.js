import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    profilePic: String,
    birthday: Date,
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
    }]
  },
  {
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)
