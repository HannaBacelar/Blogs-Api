const { BlogPost, User, Category } = require('../database/models/index');

const getBlogPost = async () => {
  try {
    const result = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        {
          model: Category,
          as: 'categories',
          through: {
            attributes: [], // não tras atributos de blogPost, apenas de categories
          },
        },
      ],
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = { getBlogPost };
