const express = require('express');

// ...
const app = express();
const middlewareError = require('./middleware/error.middleware');
const tokenValidate = require('./middleware/token.Validate');
const loginController = require('./controllers/login.controller');
const categoriesController = require('./controllers/categories.controller');
const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');

app.use(express.json());
app.post('/login', loginController.userFind);
app.post('/user', userController.createUser);
app.get('/user', tokenValidate, userController.getUser);
app.get('/user/:id', tokenValidate, userController.getUserId);
app.post('/categories', tokenValidate, categoriesController.postCategoryName);
app.get('/categories', tokenValidate, categoriesController.getCategoryName);
app.get('/post', tokenValidate, postController.getBlogPost);
app.use(middlewareError);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
