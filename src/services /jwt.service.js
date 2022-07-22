require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
      expiresIn: '15m',
      algorithm: 'HS256',
    });

    return token;
};

const validateToken = (token) => {
    try {
      /* Através o método verify, podemos validar e decodificar o nosso JWT. */
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
  
      return data;
    } catch (_err) {
      const e = new Error('Token inválido');
      e.name = 'UnauthorizedError';
      throw e;
    }
};

module.exports = { createToken, validateToken };