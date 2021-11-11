const {ApolloServer} = require("apollo-server")
const connect = require("./src/connection")
const typeDefs = require("./src/schema")
const resolvers = require("./src/resolvers")
const models = require("./src/models")

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
