require('dotenv').config();
const Joi = require('joi');
const rescue = require('express-rescue');
const JWT = require('jsonwebtoken');
const userService = require('../services/user.service');

const jwtSecret = process.env.JWT_SECRET;

const createUser = rescue(async (req, res, next) => {
    const { error } = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    image: Joi.string(),
    }).validate(req.body);
    if (error) return next(error);

    const result = await userService.createUser(req.body);
if (result.error) return next(result.error);

const config = {
expiresIn: '15m',
algorithm: 'HS256',
};
const token = JWT.sign({ data: result }, jwtSecret, config);
return res.status(201).json({ token });
});

const getUser = rescue(async (req, res, next) => {
const result = await userService.getUser();
if (!result) {
    return next(result.error);
}
 return res.status(200).json(result);
});

const getUserId = rescue(async (req, res, next) => {
    const { id } = req.params;
    const result = await userService.getUserId(id);
    if (!result) {
        return next(result.error);
    }
     return res.status(200).json(result);
    });

module.exports = { createUser, getUser, getUserId };