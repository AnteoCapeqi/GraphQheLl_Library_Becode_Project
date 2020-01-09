import rent from "../schema/rent";

import user from "../schema/user";

export default {
    Query: {
      comments: async (parent, args, { models }) => {
        return await models.Comment.findAll();
      },
      comment: async (parent, { id }, { models }) => {
        return await models.Comment.findByPk(id);
      },
      comment: async (parent, { title }, { models }) => {
        return await models.Comment.findByPk(title);
      },
    },
    Mutation: {
      createComment: async (parent,
        { title },
        { eva },
        { text },
        { date },
        { models }) => {
        return await models.Comment.create({
          title,
          eva,
          text,
          date,
          rentId: rent.id,
          userId: user.id,
        });
      },
      deleteBook: async (parent, { id }, { models }) => {
        return await models.Comment.destroy({ where: { id } });
      },
    },
    Comment: {
      user: async (comment, args, { models }) => {
        return await models.User.findByPk(comment.userId);
      },
      rent: async (comment,args, { models } ) => {
        return await models.Rent.findByPk(comment.rentId);
      },
    },
  };