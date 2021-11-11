const {ApolloServer, gql} = require("apollo-server")
const connect = require("./src/connection")
const models = require("./src/models")

const typeDefs = gql`
  type Query {
    categories: [Category!]!
  }
  type Mutation {
    addCategory(name: String!): Category!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
    deleteCategory(id: ID!): Category!
  }

  type Category {
    id: ID!
    name: String!
    # color: String!
    # icon: String!
    # image: String!
  }

  type Product {
    name: String!
    description: String!
    richDescription: String!
    image: String!
    images: [String!]
    brand: String
    Price: Float!
    categoryId: ID!
    stock: Int!
    ranting: Float!
    isFeatured: Boolean!
    CreatedAt: String!
  }

  input UpdateCategoryInput {
    name: String!
  }
`

const resolvers = {
  Query: {
    categories: async (parent, args, {Category}, info) => {
      const categories = await Category.find({}).lean().exec()
      return categories
    },
  },
  Mutation: {
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
      await Category.findByIdAndRemove(id).exec()
      // , (err, result) => {
      //   if (err) console.error(err)
      //   return result
      // })
    },
  },
  Category: {
    id: ({_id, id}) => _id || id,
  },
}

const context = {...models}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

server.listen().then(({url}) => {
  connect()
  console.log(`🚀 Server ready at ${url}`)
})
