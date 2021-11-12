const {Schema, model} = require("mongoose")
const {ObjectId} = Schema

const productSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
    },
    photo: {
      type: String,
    },
    shipping: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  {timestamps: true},
)

const Product = model("Product", productSchema)
module.exports = Product
