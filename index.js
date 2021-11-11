const {ApolloServer, gql} = require("apollo-server")
const typeDefs = require("./src/schema")
const connect = require("./src/connection")
const models = require("./src/models")

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
      const categoryToDelete = await Category.findByIdAndDelete(id).exec()
      return categoryToDelete
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
