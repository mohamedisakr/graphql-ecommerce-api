const Query = {
  // category
  categories: async (parent, args, {Category}, info) => {
    const categories = await Category.find({}).lean().exec()
    return categories
  },

  categoryFindById: async (parent, {id}, {Category}, info) => {
    const categoryToFind = await Category.findById(id).lean().exec()
    return categoryToFind
  },

  // product
  products: async (parent, args, {Product}, info) => {
    const categories = await Product.find({}).lean().exec()
    return categories
  },

  productFindById: async (parent, {id}, {Product}, info) => {
    const categories = await Product.findById(id).lean().exec()
    return categories
  },
}

module.exports = Query
