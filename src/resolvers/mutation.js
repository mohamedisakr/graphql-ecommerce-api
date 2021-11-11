const Mutation = {
  addCategory: async (parent, {name}, {Category}, info) => {
    const category = await Category.create({name})
    return category
  },
  updateCategory: async (parent, {id, input}, {Category}, info) => {
    const categoryToUpdate = await Category.findByIdAndUpdate(
      id,
      {...input},
      {new: true},
    )
    return categoryToUpdate
  },
  deleteCategory: async (parent, {id}, {Category}, info) => {
    const categoryToDelete = await Category.findByIdAndDelete(id).exec()
    return categoryToDelete
  },
}

module.exports = Mutation
