const {gql} = require("apollo-server-express")

const typeDefs = gql`
  type Query {
    categories: [Category!]!
    products: [Product!]!
  }

  type Mutation {
    # Category CUD operations
    categoryAdd(name: String!): Category!
    categoryUpdate(id: ID!, input: UpdateCategoryInput!): Category!
    categoryDelete(id: ID!): Category!

    # Product CUD operations
    productAdd(input: CreateProductInput): Product!
    productUpdate(id: ID!, input: UpdateProductInput): Product!
    productDelete(id: ID!): Product!
  }

  type Category {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!

    # color: String!
    # icon: String!
    # image: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: Category
    quantity: Int
    photo: String
    shipping: Boolean
    createdAt: String!
    updatedAt: String!
  }

  input UpdateCategoryInput {
    name: String!
  }

  input CreateProductInput {
    name: String!
    description: String!
    price: Float!
    category: ID!
    quantity: Int
    photo: String!
    shipping: Boolean
  }

  input UpdateProductInput {
    name: String!
    description: String!
    price: Float!
    category: ID!
    quantity: Int
    photo: String!
    shipping: Boolean
  }
`
module.exports = typeDefs
