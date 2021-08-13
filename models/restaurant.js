import mongoose from 'mongoose'

export {
  Restaurant
}

const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    url: String,
    img_url: String,
    rating: Number,
    price: String,
    phone: String,
    address: String,
    city: String,
    zip_code: String,
    state: String,
    country: String,
    likedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant'
    }]
  },{
  timestamps: true
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)