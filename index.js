const {ApolloServer, gql} = require("apollo-server")
const connect = require("./src/connection")

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => "world",
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({url}) => {
  connect()
  console.log(`🚀 Server ready at ${url}`)
})
