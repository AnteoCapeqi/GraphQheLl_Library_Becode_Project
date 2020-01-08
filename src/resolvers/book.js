import rent from "../schema/rent";

export default {
    Query: {
      books: async (parent, args, { models }) => {
        return await models.Book.findAll();
      },
      book: async (parent, { id }, { models }) => {
        return await models.Book.findByPk(id);
      },
      book: async (parent, { title }, { models }) => {
        return await models.Book.findByPk(title);
      },
    },
    Mutation: {
      createBook: async (parent,
        { title },
        {subtitle},
        {author},
        {editor},
        {format},
        {language},
        {copies},
        { me, models }) => {
        return await models.Message.create({
          title,
          subtitle,
          author,
          editor,
          format,
          language,
          copies,
          rentId: rent.id,
          userId: me.id,
        });
      },
      deleteBook: async (parent, { id }, { models }) => {
        return await models.Message.destroy({ where: { id } });
      },
    },
    Book: {
      user: async (book, args, { models }) => {
        return await models.User.findByPk(book.userId);
      },
      rent: async (book,args, { models } ) => {
        return await models.User.findByPk(book.rentId);
      },
    },
  };