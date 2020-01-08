import { gql } from 'apollo-server-express'



export default gql`
extend type Query {
    books: [Book!]!
    book(id: ID!): Book!
  }
extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }
type Book {
    id: ID!
    title: String!
    subtitle: String
    author: String!
    editor: String!
    format: String
    language:String!
    copies: Int!
    comment: [Comment!]
    rent: [Rent]
  }
`;