import mongoose from 'mongoose'

export {
  Chat
}

const Schema = mongoose.Schema

const messageSchema = new Schema({
  content: String,
  time: Date
})

const chatSchema = new Schema({
  messages: [messageSchema],
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  }]
  },
  {
    timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema)