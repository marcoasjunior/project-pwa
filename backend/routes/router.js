var express = require('express')
var router = express()
const {User} = require('../models')

// router.get('/', BookController.getAllBooks);

//registrar usuário

router.post('/register/user', (req, res) => {
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(User => res.status(201).send(User))
        .catch(error => res.status(400).send(error))
})

// router.get('/:id', BookController.getABook);
// router.put('/:id', BookController.updatedBook);
// router.delete('/:id', BookController.deleteBook);

module.exports = router;