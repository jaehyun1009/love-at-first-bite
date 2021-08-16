import mongoose from 'mongoose'

export{

}
const messageSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  content: String
})