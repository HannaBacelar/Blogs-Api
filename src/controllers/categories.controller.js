require('dotenv').config();
const Joi = require('joi');
const rescue = require('express-rescue');
const categoryService = require('../services/categories.service');

const postCategoryName = rescue(async (req, res, next) => {
    const { error } = Joi.object({
    name: Joi.string().required().min(3),
    }).validate(req.body);
    if (error) return next(error);

    const result = await categoryService.postCategoryName(req.body);
if (result.error) return next(result.error);
return res.status(201).json(result);
});

 const getCategoryName = rescue(async (req, res, next) => {
     const { name } = req.body;
    const result = await categoryService.getCategoryName(name);
    if (result.error) {
        return next(result.error);
}
     return res.status(200).json(result);
});

module.exports = { postCategoryName, getCategoryName };
