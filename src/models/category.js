const {Schema, model} = require("mongoose")

const schema = {
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
}

const categorySchema = Schema(schema, {timestamps: true})

const Category = model("Category", categorySchema)
module.exports = Category

// categorySchema.virtual("id").get(function () {
//   return this._id.toHexString()
// })

// categorySchema.set("toJSON", {
//   virtuals: true,
// })
