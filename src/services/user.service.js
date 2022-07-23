const { User } = require('../database/models/index');

const createUser = async (objectUser) => {
    try {
const result = await User.create(objectUser, { 
    attributes: { exclude: ['password'] },
    raw: true, // transforma em json
});
    return result;
    } catch (error) {
return {
error: {
code: 'alreadyExists', message: 'User already registered' },
    }; 
}
    };

module.exports = { createUser };