const Mutation = {
  // category
  categoryAdd: async (parent, {name}, {Category}, info) => {
    //TODO: Admin security (Authentication, Authorization)
    const category = await Category.create({name})
    return category
  },
  categoryUpdate: async (parent, {id, input}, {Category}, info) => {
    //TODO: Admin security (Authentication, Authorization)
    const categoryToUpdate = await Category.findByIdAndUpdate(
      id,
      {...input},
      {new: true},
    )
    return categoryToUpdate
  },
  categoryDelete: async (parent, {id}, {Category}, info) => {
    //TODO: Admin security (Authentication, Authorization)
    const categoryToDelete = await Category.findByIdAndDelete(id).exec()
    return categoryToDelete
  },

  // product
  productAdd: async (parent, {input}, {Product}, info) => {
    //TODO: Admin security (Authentication, Authorization)
    //TODO: validation => name, description, price, category, image size,
    //            => quantity, photo, shipping
    const productToAdd = await Product.create({...input})
    return productToAdd
  },
  productUpdate: async (parent, {id, input}, {Product}, info) => {
    //TODO: Admin security (Authentication, Authorization)
    const productToUpdate = await Product.findByIdAndUpdate(
      id,
      {...input},
      {new: true},
    )
    return productToUpdate
  },
  productDelete: async (parent, {id}, {Product}, info) => {
    //TODO: Admin security (Authentication, Authorization)
    const productToDelete = await Product.findByIdAndDelete(id).exec()
    return productToDelete
  },
}

module.exports = Mutation
