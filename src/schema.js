const {gql} = require("apollo-server-express")

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
module.exports = typeDefs
