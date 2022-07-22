const { User } = require('../database/models/index');

const userFind = async (email) => {
    try {
        const result = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
    raw: true, // transforma em json
            });
        if (!result) {
         return { error: { code: 'invalidData', message: 'Invalid fields' },
              }; 
        }
            return result;
    } catch (error) {
        return {
            error: {
                code: 'invalidData', message: 'Invalid fields' },
              }; 
        }
    };

module.exports = { userFind };