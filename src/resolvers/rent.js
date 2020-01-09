import book from "../schema/book";

import user from "../schema/user";

export default {
    Query: {
      comments: async (parent, args, { models }) => {
        return await models.Rent.findAll();
      },
      comment: async (parent, { id }, { models }) => {
        return await models.Rent.findByPk(id);
      },
      comment: async (parent, { title }, { models }) => {
        return await models.Rent.findByPk(title);
      },
    },
    Mutation: {
      createComment: async (parent,
        { deadline },
        { me, models }) => {
        return await models.Comment.create({
          deadline,
          bookId: book.id,
          userId: user.id,
        });
      },
      deleteBook: async (parent, { id }, { models }) => {
        return await models.Comment.destroy({ where: { id } });
      },
    },
    Book: {
      user: async (comment, args, { models }) => {
        return await models.User.findByPk(comment.userId);
      },
      rent: async (comment,args, { models } ) => {
        return await models.User.findByPk(comment.rentId);
      },
    },
  };