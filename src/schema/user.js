import { gql } from 'apollo-server-express'



export default gql`
extend type Query {
    users: [User!]
    user(id: ID!): User!
  }
extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }
type User {
    id: ID!
    mail: String!
    copies: Int!
    password: String!
    comment: [Comment]
    rent: [Rent]
  }
`;