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

const getUser = async () => {
        try {
const result = await User.findAll({ 
    attributes: { exclude: ['password'] },
    raw: true, // transforma em json
});
return result;
} catch (error) {
    return undefined;
}
};
const getUserId = async (id) => {
    try {
const result = await User.findByPk(id, { 
attributes: { exclude: ['password'] },
raw: true, // transforma em json
});
if (!result) {
    return {
        error: {
        code: 'notFound', message: 'User does not exist' },
         };
}
return result;
} catch (error) {
    return {
 error: {
 code: 'notFound', message: 'User does not exist' },
  };
}
};
module.exports = { createUser, getUser, getUserId };