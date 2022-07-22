require('dotenv').config();
const rescue = require('express-rescue');
const JWT = require('jsonwebtoken');
const loginService = require('../services/login.service');

const jwtSecret = process.env.JWT_SECRET;

const userFind = rescue(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) { 
 return next({
        code: 'required',
        message: 'Some required fields are missing',
      }); 
}
const result = await loginService.userFind(email);
if (result.error) return next(result.error);

const config = {
expiresIn: '15m',
algorithm: 'HS256',
};
const token = JWT.sign({ data: result }, jwtSecret, config);
return res.status(200).json({ token });
});
module.exports = { userFind };