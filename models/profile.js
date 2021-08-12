import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    profilePic: String,
    birthday: {
      type: Date,
      default: new Date(2000, 0, 1)
    },
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
