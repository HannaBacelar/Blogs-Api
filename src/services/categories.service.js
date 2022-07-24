const { Category } = require('../database/models/index');

const postCategoryName = async (name) => {
    try {
const result = await Category.create(name, { 
    raw: true,
});

    return result;
    } catch (error) {
return {
error: {
code: 'required', message: '/name/ is required' },
    }; 
}
};

const getCategoryName = async (name) => {
        try {
const result = await Category.findAll(name, { 
    raw: true, 
});
return result;
} catch (error) {
    return undefined;
}
};

module.exports = { postCategoryName, getCategoryName };