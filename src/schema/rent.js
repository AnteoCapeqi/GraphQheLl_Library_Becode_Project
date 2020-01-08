import { gql } from 'apollo-server-express'



export default gql`
extend type Query {
    rents: [Rent!]
    rent(id: ID!): Rent!
  }
extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }

type Rent {
    id: ID!
    deadline: Date!
    user: User!
    book: Book!
  }
`;