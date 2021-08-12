import mongoose from 'mongoose'

export {
  Restaurant
}

const Schema = mongoose.Schema

const locationSchema = new Schema({
  city: String,
  country: String,
  state: String,
  address: String,
  zipCode: Number
})

const restaurantSchema = new Schema({
    id: String,
    name: String,
    url: String,
    imgUrl: String,
    phone: String,
    rating: Number,
    priceRating: Number,
    location: locationSchema,
    likedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant'
    }]
  },{
  timestamps: true
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)