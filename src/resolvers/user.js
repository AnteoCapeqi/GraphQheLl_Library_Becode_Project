import rent from "../schema/rent";

import comment from "../schema/comment";

export default {
    Query: {
      books: async (parent, args, { models }) => {
        return await models.User.findAll();
      },
      book: async (parent, { id }, { models }) => {
        return await models.User.findByPk(id);
      },
      book: async (parent, { title }, { models }) => {
        return await models.User.findByPk(title);
      },
    },
    Mutation: {
      createBook: async (parent,
        { mail },
        { copies },
        { password },
        { models }) => {
        return await models.User.create({
          mail,
          copies,
          password,
          commentId: comment.id,
          rentId: rent.id,
        });
      },
      deleteBook: async (parent, { id }, { models }) => {
        return await models.User.destroy({ where: { id } });
      },
    },
    User: {
      comment: async (comment, args, { models }) => {
        return await models.Comment.findByPk(book.userId);
      },
      rent: async (rent,args, { models } ) => {
        return await models.Rent.findByPk(user.rentId);
      },
    },
  };