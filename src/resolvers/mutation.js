const Mutation = {
  // category
  categoryAdd: async (parent, {name}, {Category}, info) => {
    const category = await Category.create({name})
    return category
  },
  categoryUpdate: async (parent, {id, input}, {Category}, info) => {
    const categoryToUpdate = await Category.findByIdAndUpdate(
      id,
      {...input},
      {new: true},
    )
    return categoryToUpdate
  },
  categoryDelete: async (parent, {id}, {Category}, info) => {
    const categoryToDelete = await Category.findByIdAndDelete(id).exec()
    return categoryToDelete
  },

  // product
  productAdd: async (parent, {input}, {Product}, info) => {
    const productToAdd = await Product.create({...input})
    return productToAdd
  },
  productUpdate: async (parent, {id, input}, {Product}, info) => {
    const productToUpdate = await Product.findByIdAndUpdate(
      id,
      {...input},
      {new: true},
    )
    return productToUpdate
  },
  productDelete: async (parent, {id}, {Product}, info) => {
    const productToDelete = await Product.findByIdAndDelete(id).exec()
    return productToDelete
  },
}

module.exports = Mutation
