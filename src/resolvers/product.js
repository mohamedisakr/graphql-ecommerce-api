const Product = {
  id: ({_id, id}) => _id || id,
  category: async (parent, args, {Category}, info) => {
    const categoryToFind = await Category.findById(parent.category)
      .lean()
      .exec()
    return categoryToFind
  },
}

module.exports = Product
