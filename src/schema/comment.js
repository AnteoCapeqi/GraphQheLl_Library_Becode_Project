import { gql } from 'apollo-server-express'



export default gql`
extend type Query {
    rents: [Rent!]!
    rent(id: ID!): Rent!
  }
extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }
type Comment {
    id: ID!
    title: String!
    eval: Int
    text: String!
    date: Date!
    user: User!
    book: Book!
  }
`;