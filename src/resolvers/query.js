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

  categoryGetAllProducts: async (parent, {id}, {Product}, info) => {
    const allProductsInCategory = await Product.find({category: id})
      .lean()
      .exec()
    return allProductsInCategory
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

  relatedProducts: async (parent, {id, input}, {Product}, info) => {
    //TODO: sorted by sold, limit
    const {category} = input
    console.log(`id : ${id}`)
    console.log(`category : ${category}`)
    // User.find({ "username": { "$ne": 'admin' } })
    const products = await Product.find({
      _id: {$ne: id},
      category: category,
    }).exec()
    return products
  },

  productSearch: async (parent, {input}, {Product}, info) => {
    const {sortBy, order, limit, skip, filters} = input
    let sortCriteria = sortBy ? sortBy : "_id"
    let orderCriteria = order ? order : "desc"
    let limitCriteria = limit ? limit : 20
    const searchKeywords = {}

    for (let key in filters) {
      if (filters[key].length > 0) {
        if (key.toLowerCase() === "price".toLowerCase()) {
          searchKeywords[key] = {$gte: filters[key][0], $lte: filters[key][1]}
        } else {
          searchKeywords[key] = filters[key]
        }
      }
    }

    const products = await Product.find(searchKeywords)
      .sort([[sortCriteria, orderCriteria]])
      .skip(skip)
      .limit(limitCriteria)
      .exec()
    return products
  },
}

module.exports = Query
