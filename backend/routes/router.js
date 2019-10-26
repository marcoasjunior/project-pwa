var express = require('express');
var app = express();

const UserController = require('../controller/user_controller')

// router.get('/', BookController.getAllBooks);
app.post('/user/create', UserController.newUser);
// router.get('/:id', BookController.getABook);
// router.put('/:id', BookController.updatedBook);
// router.delete('/:id', BookController.deleteBook);

module.exports = app;