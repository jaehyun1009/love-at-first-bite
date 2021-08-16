import mongoose from 'mongoose'

export{
Message
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

const Message = mongoose.model('Message',messageSchema)
