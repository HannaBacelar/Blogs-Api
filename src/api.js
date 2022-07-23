const express = require('express');

// ...
const app = express();
const middlewareError = require('./middleware/error.middleware');
const tokenValidate = require('./middleware/token.Validate');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');

app.use(express.json());
app.post('/login', loginController.userFind);
app.post('/user', userController.createUser);
app.use(tokenValidate);
app.get('/user', userController.getUser);
app.use(middlewareError);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
