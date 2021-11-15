const {gql} = require("apollo-server-express")

const typeDefs = gql`
  type Query {
    # // category
    categories: [Category!]!
    categoryFindById(id: ID!): Category!

    # // product
    products: [Product!]!
    productFindById(id: ID!): Product!
    mostPopularProducts(input: MostPopularProductsInput): [Product!]!
    relatedProducts(id: ID!, input: RelatedProductsInput): [Product!]!
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
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: Category
    quantity: Int
    sold: Int
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
    sold: Int
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

  input MostPopularProductsInput {
    sortBy: String
    order: String
    limit: Int
  }

  input RelatedProductsInput {
    category: String!
  }
`
module.exports = typeDefs
