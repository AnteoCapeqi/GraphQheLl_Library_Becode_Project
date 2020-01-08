import { gql } from 'apollo-server-express';

import userSchema from './user';

import bookSchema from './book';

import commentSchema from './comment';

import rentSchema from './rent';


const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, bookSchema,commentSchema,rentSchema];