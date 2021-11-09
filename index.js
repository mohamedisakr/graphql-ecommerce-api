const {ApolloServer, gql} = require("apollo-server")
const connect = require("./src/connection")

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Category {
    id: ID!
    name: String!
    color: String!
    icon: String!
    image: String!
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
