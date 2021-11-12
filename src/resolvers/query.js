const Query = {
  categories: async (parent, args, {Category}, info) => {
    const categories = await Category.find({}).lean().exec()
    return categories
  },
  products: async (parent, args, {Product}, info) => {
    const categories = await Product.find({}).lean().exec()
    return categories
  },
}

module.exports = Query
