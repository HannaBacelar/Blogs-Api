const express = require('express');

// ...
const app = express();
const middlewareError = require('./middleware/error.middleware');
const logincontroller = require('./controllers/login.controller');

app.use(express.json());
app.post('/login', logincontroller.userFind);
app.use(middlewareError);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
