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
    const products = await Product.find({}).lean().exec()
    return products
  },

  productFindById: async (parent, {id}, {Product}, info) => {
    const products = await Product.findById(id).lean().exec()
    return products
  },

  mostPopularProducts: async (parent, {input}, {Product}, info) => {
    const {sortBy, order, limit} = input
    let sortCriteria = sortBy ? sortBy : "createdAt"
    let orderCriteria = order ? order : "asc"
    let limitCriteria = limit ? limit : 10

    const products = await Product.find({})
      .sort([[sortCriteria, orderCriteria]])
      .limit(limitCriteria)
      .exec()
    return products
  },
}

module.exports = Query
