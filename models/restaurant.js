import mongoose from 'mongoose'

const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    url: String,
    img_url: String,
    rating: Number,
    review_count: Number,
    categories: [Object],
    price: String,
    phone: String,
    address: String,
    city: String,
    zip_code: String,
    state: String,
    country: String,
    likedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    }]
  },{
  timestamps: true
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
  Restaurant
}