const mongoose = require('mongoose');

//Product Schema

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;